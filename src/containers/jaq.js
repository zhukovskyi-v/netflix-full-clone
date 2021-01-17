import React from 'react'
import faqData from '../fixtures/faq.json'
import Accordion from '../components/accordion'
import OptForm from '../components/opt-form'

export default function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>
        Frequently Asked Questions
      </Accordion.Title>
      {faqData.map((el) => {
        return (
          <Accordion.Item key={el.id + 2}>
            <Accordion.Header>{el.header}</Accordion.Header>
            <Accordion.Body>{el.body}</Accordion.Body>
          </Accordion.Item>
        )
      })}
      <OptForm>
        <OptForm.Input placeholder="Email" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart
          you membership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  )
}
