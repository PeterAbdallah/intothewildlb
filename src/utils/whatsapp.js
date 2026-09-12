import siteConfig from '../data/siteConfig.js'

// Builds a wa.me link that opens WhatsApp with a pre-filled message.
// Pass a package name to ask about a specific package, or omit it
// for a general enquiry message.
export function whatsappLink(packageName) {
  const message = packageName
    ? `Hello, I'm interested in the ${packageName} package.`
    : "Hello, I'd like to ask about your nature experiences."

  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`
}
