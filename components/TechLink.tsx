import * as React from "react";
import { motion } from "framer-motion";

type displayIcons = {
  link: string;
  name: string;
  icon: React.ReactElement;
};

type props = {
  links: Array<displayIcons>;
};

const TechLink = ({ links }: props) => {
  return (
    <div className="flex overflow-hidden justify-center gap-7">
      {links.map((link, index) => {
        return (
          <div key={index}>
            <motion.a
              whileHover={{ color: "#ffffff" }}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center text-sm gap-1 text-[#d2d2d2]"
            >
              {link.icon}
              <p>{link.name}</p>
            </motion.a>
          </div>
        );
      })}
    </div>
  );
};

export default TechLink;
