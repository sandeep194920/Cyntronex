import React, { useState, useEffect } from 'react'
import { H2 } from './Text/Heading'
import axios from 'axios'
import Modal from './Modal'
import LoadingSpinner from './LoadingSpinner'

interface FormData {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

const form = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function ContactUs() {
  const [isFormOk, setIsFormOk] = useState({
    status: true,
    error: '',
  })

  const [isFormTouched, setIsFormTouched] = useState(false)
  const [formData, setFormData] = useState<FormData>(form)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const formHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setIsFormTouched(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setIsModalOpen(true)
    setIsFormSubmitted(false)
    if (!isFormTouched) {
      // Only validate if the form has been touched
      return
    }
    const requiredFields = ['fullName', 'email', 'subject', 'message']

    let formError = 'Fill out all necessary fields please'

    const areRequiredFieldsPresent = requiredFields.every(
      (key) => formData[key as keyof FormData] !== ''
    )

    areRequiredFieldsPresent && (formError = '')

    const isPhoneValid = !formData.phone || /^[0-9]{10}$/.test(formData.phone)

    !isPhoneValid && (formError = 'Please check your phone number')

    setIsFormOk({
      ...isFormOk,
      status: areRequiredFieldsPresent && isPhoneValid,
      error: formError,
    })

    if (formError) {
      setIsLoading(false)
      setIsModalOpen(false)
      return
    }
    // submit the form (call api)
    try {
      const response = await axios.post('/api/email', {
        name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        phone: formData.phone,
        message: formData.message,
      })

      console.log(`The response is ${response.data.message}`)
      if (response.status === 200) {
        setIsLoading(false)
        setIsFormSubmitted(true)
      }
      // Handle success
    } catch (error) {
      console.error('Error sending email:', error)
      // Handle error
    } finally {
      setFormData(form)
    }
  }

  useEffect(() => {
    if (isFormSubmitted) {
      setTimeout(() => {
        setIsFormSubmitted(false)
      }, 10000)
    }
  }, [isFormSubmitted])

  return (
    <section id="contact">
      <H2>Get in touch with us</H2>
      <form
        onSubmit={handleSubmit}
        id="contact-section"
        className="mx-auto mt-9 max-w-[85%] space-y-7 overflow-hidden rounded pb-14 sm:max-w-[80%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]"
      >
        <div>
          {!isFormOk.status && (
            <p className="text-center text-sm text-red-500">{isFormOk.error}</p>
          )}

          {isFormSubmitted && (
            <p className="text-center text-sm text-green-500">
              Got your message! We&lsquo;ll get back to you in 24 hours
            </p>
          )}
        </div>
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-1">
          <div data-aos="fade-right" className="w-[100%] md:w-[45%]">
            <label
              htmlFor="full-name"
              className="mb-2 block text-xs font-bold text-gray-400"
            >
              Full Name <span className="asterisk text-red-600">*</span>
            </label>
            <input
              onChange={formHandler}
              value={formData.fullName}
              name="fullName"
              type="text"
              id="full-name"
              className="w-full rounded border-none bg-light-gray px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
              placeholder="John Doe"
            />
          </div>
          <div data-aos="fade-left" className="w-[100%] md:w-[45%]">
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-bold text-gray-400"
            >
              Email <span className="asterisk text-red-600">*</span>
            </label>
            <input
              onChange={formHandler}
              value={formData.email}
              type="email"
              name="email"
              id="email"
              className="w-full rounded border-none bg-light-gray px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-1"
        >
          <div className="w-[100%] md:w-[45%]">
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-bold text-gray-400"
            >
              Phone Number
            </label>
            <input
              onChange={formHandler}
              value={formData.phone}
              type="tel"
              name="phone"
              id="phone"
              className="w-full rounded border-none bg-light-gray px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
              placeholder="(999)-999-9999"
            />
          </div>
          <div data-aos="fade-left" className="w-[100%] md:w-[45%]">
            <label
              htmlFor="subject"
              className="mb-2 block text-xs font-bold text-gray-400"
            >
              Subject <span className="asterisk text-red-600">*</span>
            </label>
            <input
              onChange={formHandler}
              value={formData.subject}
              type="text"
              id="subject"
              name="subject"
              className="w-full rounded border-none bg-light-gray px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
              placeholder="A brief about your message"
            />
          </div>
        </div>
        <div data-aos="fade-up" className="mb-4">
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-bold text-gray-400"
          >
            Message <span className="asterisk text-red-600">*</span>
          </label>
          <textarea
            onChange={formHandler}
            value={formData.message}
            id="message"
            name="message"
            rows={4}
            className="w-full rounded border-none bg-light-gray px-3 py-2 placeholder:text-xs focus:outline-1 focus:outline-primary-clr"
            placeholder="Feel free to share your thoughts with us"
          />
        </div>
        <div className="flex justify-center">
          <button className="border border-primary-clr text-primary-clr hover:bg-primary-clr-light1 disabled:bg-gray-400 rounded-md px-4 py-2 hover:text-white">
            Send your message
          </button>
        </div>
      </form>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isLoading={isLoading}
      >
        {isLoading ? (
          <>
            <h2 className="my-10 border-b-primary-clr bg-gradient bg-clip-text text-lg font-extrabold">
              Sending Email....
            </h2>
            <div className="mb-10 flex justify-center">
              <LoadingSpinner />
            </div>
          </>
        ) : (
          <p className="mb-14 text-center leading-10">
            Thank you for your message! We&apos;ll be in touch within the next
            24 hours.
          </p>
        )}
      </Modal>
    </section>
  )
}

export default ContactUs
