import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useSendContactMessage } from '../../hooks/usePublicData'
import type { ContactMessage } from '../../types'
import { buttonClass } from '../ui/button'
import Section from '../ui/Section'

type FieldName = keyof ContactMessage
type FormErrors = Partial<Record<FieldName, string>>

const emptyForm: ContactMessage = { name: '', email: '', message: '' }

function validate({ name, email, message }: ContactMessage): FormErrors {
  const errors: FormErrors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Please enter a valid email.'
  if (message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactMessage>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const { mutate, isPending, isSuccess, isError, reset } = useSendContactMessage()

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name as FieldName
    const { value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    mutate(form, { onSuccess: () => setForm(emptyForm) })
  }

  return (
    <Section id="contact" eyebrow="04 / contact" title="Let's work together">
      <div className="grid items-start gap-6 md:grid-cols-[1fr_1.4fr] md:gap-12">
        <p className="text-lg text-muted">
          Have a project, a role, or just a question? Send me a message and I&apos;ll get back to you.
        </p>

        {isSuccess ? (
          <div className="rounded-2xl bg-accent-soft p-6" role="status">
            <p className="mb-4 font-medium">Thanks! Your message has been sent.</p>
            <button className={buttonClass('ghost')} onClick={reset}>
              Send another
            </button>
          </div>
        ) : (
          <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
            <Field label="Name" name="name" value={form.name} error={errors.name} onChange={handleChange} />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={handleChange}
            />
            <Field
              label="Message"
              name="message"
              multiline
              value={form.message}
              error={errors.message}
              onChange={handleChange}
            />
            {isError && <p className="text-sm text-danger">Something went wrong. Please try again.</p>}
            <button className={`${buttonClass('primary')} justify-self-start`} type="submit" disabled={isPending}>
              {isPending ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </Section>
  )
}

interface FieldProps {
  label: string
  name: FieldName
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  type?: string
  multiline?: boolean
}

const inputClass =
  'resize-y rounded-lg border border-line bg-surface px-3.5 py-3 text-foreground focus:border-transparent focus:outline-2 focus:outline-offset-1 focus:outline-accent aria-invalid:border-danger'

function Field({ label, name, error, multiline = false, type = 'text', ...props }: FieldProps) {
  const id = `contact-${name}`
  const shared = {
    id,
    name,
    className: inputClass,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `${id}-error` : undefined,
    ...props,
  }

  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {multiline ? <textarea rows={5} {...shared} /> : <input type={type} {...shared} />}
      {error && (
        <span id={`${id}-error`} className="text-sm text-danger">
          {error}
        </span>
      )}
    </div>
  )
}
