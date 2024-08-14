
import Section46props from './Section46Props';
import arcade from "../../commonResource/images/icons/arcade.png";
import watch from "../../commonResource/images/icons/watch-series5-logo.png";
import appletv from "../../commonResource/images/icons/apple-tv-logo.png";
import banker from "../../commonResource/images/home/banker.png";
// 

import React from 'react'

export default function Section46() {
  return (
    <>
      <Section46props
        heghlightwrapper={"fourth-heghlight-wrapper"}
        title
        descriptionwraper={"description-wraper"}
        description={"Just the right amount of everything."}
        pricewrapper
        linksswrapper={"links-wrapper"}
        leftlink={"Learn more"}
        leftlink1={"Apply now"}
        titlewraper
        titlewraperclass={"title-wraper white"}
        titlediscription={"Macbook Air"}
        img_discription={"Lean. Mean. M3 machine."}
        linkkswrapper={"links-wrapper white"}
        link1={"Watch the PSA"}
      />
      <Section46props
        heghlightwrapper={"fifth-heghlight-wrapper"}
        toplogo
        TopLogowrapper
        logowrapper={"logo-wrapper"}
        logoimg={appletv}
        descriptionwraper
        tvshow
        watch
        rightlogo
        rightdiscription
        rightdiscriptionwrapper={`With the Always-On Retina display. ${(
          <br />
        )}You’ve never seen a watch like this.`}
        linkkswrapper={"links-wrapper"}
        link1={"Learn more"}
        link2
        linkswrapper={"Buy"}
      />
      <Section46props
        heghlightwrapper={"sixth-heghlight-wrapper"}
        toplogo
        TopLogowrapper
        logowrapper={"logo-wrapper"}
        logoimg={arcade}
        descriptionwraper={"description-wraper white"}
        description={"  Agent 8 is a small hero on a big mission."}
        linksswrapper={"links-wrapper"}
        leftlink={"Play now"}
        leftlink1={"Learn about Apple Arcade"}
        titlewraper
        titlewraperclass={"title-wraper"}
        titlediscription={"Apple Card Monthly Installments"}
        rightdiscription
        rightdiscriptionwrapper={
          "Pay for your next iPhone over time, interest-free with AppleCard."
        }
        linkkswrapper={"links-wrapper"}
        link1={"Learn more"}
        link2
        linkswrapper={"Apply now"}
      />
    </>
  );
}
