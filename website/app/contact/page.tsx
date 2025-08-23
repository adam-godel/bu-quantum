import Mail from '../components/mail'

export const metadata = {
  title: 'Contact',
  description: 'Learn about how to contact us and join our mailing list.',
}

export default function Contact() {
    return (
        <div className="lg:h-[calc(100vh-288px)] flex flex-col items-center justify-center text-center mb-8">
            <h1 className="text-4xl font-bold">curious?</h1>
            <p className="text-2xl m-4">if you'd like to reach out, please feel free to send us an email. <br /> if you're interested in hearing more from us, join our mailing list and follow our socials!</p>
            <Mail/>
        </div>
    )
}
