import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("http://localhost:5001/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  } catch (err) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   // Simulate form submission
  //   await new Promise(resolve => setTimeout(resolve, 1000))

  //   toast({
  //     title: "Message sent!",
  //     description: "Thanks for reaching out. I'll get back to you soon!",
  //   })

  //   setFormData({ name: "", email: "", message: "" })
  //   setIsSubmitting(false)
  // }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Code-With-Fred",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/kedin.com/in/favour-chimereze-eze-37b1b235a/",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/chimereze_eze",
      color: "hover:text-blue-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 lg:py-24 bg-muted/30"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <h2 
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" aria-hidden="true" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
              Have a project in mind or need help with <strong>web design</strong> or <strong>development</strong>? 
              I'd love to hear from you. Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-4 sm:p-8 shadow-soft">
                <CardContent className="p-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" aria-label="Contact form">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or how I can help..."
                        rows={6}
                        required
                        className="mt-1 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group transition-smooth"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <Card className="p-8 shadow-soft">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">ezefavourchimereze@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Port-Harcourt, Nigeria</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="p-8 shadow-soft">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 bg-primary/10 rounded-lg text-primary transition-colors ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    Follow me for updates on new projects, technical articles, 
                    and insights into web development and technical writing.
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="p-8 shadow-soft bg-primary/5 border-primary/20">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">Current Availability</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium text-green-700 dark:text-green-400">
                      Available for new projects
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    I'm currently accepting new freelance projects and consulting 
                    opportunities. Let's discuss how I can help bring your ideas to life!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection