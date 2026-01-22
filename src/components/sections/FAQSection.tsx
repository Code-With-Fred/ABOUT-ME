import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of websites do you build?",
    answer: "I specialize in building custom websites including business websites, e-commerce platforms, web applications, portfolio sites, and landing pages. Each project is tailored to meet your specific business needs and goals."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Project timelines vary based on complexity. A simple landing page can take 1-2 weeks, while a full e-commerce site or web application may take 4-8 weeks. I'll provide a detailed timeline after understanding your requirements."
  },
  {
    question: "What is your development process?",
    answer: "My process includes: Discovery & Planning, Design & Prototyping, Development, Testing & QA, and Launch & Support. I maintain clear communication throughout and provide regular updates on progress."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes! I offer ongoing maintenance packages that include security updates, bug fixes, performance optimization, and content updates. This ensures your website stays secure and up-to-date."
  },
  {
    question: "What technologies do you use?",
    answer: "I work with modern technologies including React, TypeScript, Next.js, Node.js, and various databases. I choose the best tech stack based on your project requirements for optimal performance and scalability."
  },
  {
    question: "How much does a website cost?",
    answer: "Pricing depends on project scope and requirements. I offer competitive rates and transparent pricing. Contact me for a free consultation and detailed quote tailored to your specific needs."
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes, all my websites are built with SEO best practices in mind. I also offer additional SEO optimization services to help improve your search engine rankings and online visibility."
  },
  {
    question: "Can you help redesign my existing website?",
    answer: "Absolutely! I can modernize your existing website with a fresh design, improved user experience, better performance, and updated functionality while preserving your brand identity."
  }
]

const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 bg-muted/30" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about my web development services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
