import { motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";

const pressReleases = [
  {
    publication: "Financial Times",
    title: "Sysco LABS supports Sri Lanka's inaugural BSides Cybersecurity Conference",
    url: "https://www.ft.lk/it-telecom-tech/Sysco-LABS-supports--Sri-Lanka-s-inaugural-BSides-Cybersecurity-Conference/50-779889",
  },
  {
    publication: "Daily Mirror",
    title: "Colombo to host global cybersecurity trailblazers",
    url: "https://www.dailymirror.lk/business-news/Colombo-to-host-global-cybersecurity-trailblazers/273-309679",
  },
  {
    publication: "LMD",
    title: "BSides Sri Lanka 2025",
    url: "https://lmd.lk/bsides-sri-lanka-2025/",
  },
  {
    publication: "HackerOne",
    title: "HackerOne Sponsors BSides Sri Lanka",
    url: "http://h1.community/events/details/hackerone-sponsored-conferences-events-presents-hackerone-sponsors-bsides-sri-lanka/",
  },
  {
    publication: "Lanka Talks",
    title: "Sysco LABS supports Sri Lanka's inaugural BSides Cybersecurity Conference",
    url: "https://www.lankatalks.com/post/sysco-labs-supports-sri-lanka-s-inaugural-bsides-cybersecurity-conference",
  },
];

const Press = () => {
  return (
    <section id="press" className="py-20 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Press Releases
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Media coverage and news about BSides Sri Lanka 2025.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {pressReleases.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 8 }}
              className="flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {item.publication}
                </span>
                <h3 className="text-foreground font-medium mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
