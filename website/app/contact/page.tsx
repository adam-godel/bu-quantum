import Mail from '../components/mail'

export const metadata = {
  title: 'Contact',
  description: 'Learn about how to contact us and join our mailing list.',
}

export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto w-full mb-24">
            <p className="eyebrow mb-5">Get involved</p>
            <h1 className="display mb-6">Curious?</h1>
            <p className="lede mb-4">
                If you'd like to reach out, please feel free to send us an email at{' '}
                <a
                    href="mailto:bosuquantum@gmail.com"
                    className="text-crimson-lt underline underline-offset-[3px] decoration-1"
                >
                    bosuquantum@gmail.com
                </a>
                .
            </p>
            <p className="lede">
                If you're interested in hearing more from us, join our mailing list and follow our socials.
            </p>
            <Mail/>
        </div>
    )
}
