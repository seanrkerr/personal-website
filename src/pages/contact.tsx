import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

export default function Contact() {
  return (
    <>
      <Seo title="Contact - Contact Me" pageName="Contact" />
      <Layout title="Contact Me">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8 relative -mt-32 max-w-8xl mx-auto pt-8 md:pt-26 relative z-10 md:pb-12 pb-32 px-4 sm:px-6 lg:px-8 lg:w-9/12">
          <div className="flex flex-row bg-white rounded-2xl shadow-xl mt-8 h-full">
            <div className="flex-1 relative pt-8 px-12 pb-8 md:px-8">
              <p className="mt-4 ml-3 text-base text-gray-500">
                Hi there! Thanks for visiting! I{`'`}m pretty busy these days
                much like everyone else. If you need to get in touch please do
                so!
              </p>
              <p className="mt-4 ml-3 mb-3 text-base text-gray-500">
                Can I ask you to consider the following things before you do
                though?
              </p>
              <p className="mt-4 ml-3 mb-3 text-base text-gray-500">
                I{`'`}m not interested in SEO, app development, web development
                or any other service that you might be intending to offer, so
                please save your time by not sending this to me.
              </p>
              <p className="mt-4 ml-3 mb-3 text-base text-gray-500">
                If you would like to hire me, then please reach out to me on
                <a
                  href="https://www.linkedin.com/in/sean-kerr-a8a073a/"
                  className="text-gray-700 hover:text-indigo-600 inline-block	"
                  target="_new"
                >
                  <span className="sr-only">LinkedIn</span>
                  &nbsp;LinkedIn
                </a>
              </p>

              <p className="mt-4 ml-3 text-base text-gray-500">
                Otherwise, here is my email. Feel free to contact me anytime at
                sean@seankerr.com
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
