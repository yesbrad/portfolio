import React, { useState, useEffect } from 'react'
import { Contianer, TitleWrapper, InfoText, Wrapper, Input, ButtonWrapper, InputTitle, TextArea, Error, Success} from './styles';
import Button from '../Button';
import emailjs from 'emailjs-com';

const USER_ID = 'user_lDOz3SNXNpyVYqIfhOCfH';

const Contact = (props) => {
	const {
		title,
	} = props;

	const [enabled, setEnabled] = useState(false);
	const [errors, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const [contactData, setContactData] = useState({
		email: '',
		message: '',
	});

	useEffect(() => {
		emailjs.init(USER_ID);
	}, [])

	const onSendMessage = async () => {
		if(enabled) return;

		console.log(contactData);
		setSuccess(false);

		if (contactData.message === '' || contactData.email === '') {
			setError(true);
			return;
		}

		setError(false);
		setEnabled(true);

		//Send
		try {
			await emailjs.send('bradsaccount', 'template_ytAzdJ1x', {
				'name': contactData.email,
				'message': contactData.message,
			});
			setSuccess(true);
			console.log('Email Sent!')
		} catch (err) {
			console.log('We Broke', err);
		}

		setEnabled(false);
	}

	return (
		<Contianer>
			<Wrapper>
				<TitleWrapper>Contact Me</TitleWrapper>
			</Wrapper>
			<Wrapper>
				{!errors && <InputTitle>Your E-Mail:</InputTitle>}
				{errors && <InputTitle red>Your E-Mail: *</InputTitle>}
				<Input value={contactData.email} onChange={(input) => setContactData({ ...contactData, email: input.target.value })}/>
				{!errors && <InputTitle>Message: </InputTitle>}
				{errors && <InputTitle red>Message: *</InputTitle>}
				<TextArea  value={contactData.message} onChange={(input) => setContactData({ ...contactData, message: input.target.value })}/>
				<ButtonWrapper>
					<Button title="Send" onClick={onSendMessage}/>
				</ButtonWrapper>
				{errors && <Error>* Missing Fields</Error>}
				{success && <Success>Email Sent!</Success>}
			</Wrapper>
		</Contianer>
	);
};

export default Contact;