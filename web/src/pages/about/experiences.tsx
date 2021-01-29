import React, { ReactNode } from "react";
import { Link } from "common/components/base/navigation/link/link";

export type Experience = {
  blurb: ReactNode;
  organization: {
    logoImagePath: string;
    name: string;
    websiteHref: string;
  };
  timeframe: {
    end: string;
    start: string;
  };
};

export const experiences: Experience[] = [
  {
    blurb: (
      <p>
        Here I am today: employee #2 working on the entire stack, building the
        most cutting edge mortgage servicing platform to provide borrowers,
        servicers, and investors the best homeownership experience technology
        has to offer. This startup has radically changed the way I think about
        building products, empowering others, and impacting the world. We’re
        always looking for bright minds to join the{" "}
        <Link href="https://valon.com/about-us">team </Link>. Let’s chat if
        you’re passionate about bringing technology into a traditionally brick
        and mortar industry!
      </p>
    ),
    organization: {
      websiteHref: "https://www.valon.com/",
      logoImagePath: "/images/pages/about/peachstreet.png",
      name: "Valon",
    },
    timeframe: {
      start: "Oct 2019",
      end: "Present",
    },
  },
  {
    blurb: (
      <p>
        Right out of college I joined the{" "}
        <Link href="https://sites.google.com/new">Google Sites</Link> team,
        learning how to launch fully-fledged, production-ready features, write
        high quality code, and promote the best team culture. I enjoyed learning
        on the job and absorbing knowledge from my peers, while inspiring others
        with my own discoveries. During my time I spearheaded two innovative
        features:{" "}
        <Link href="https://gsuiteupdates.googleblog.com/2017/08/map-your-site-to-custom-url-in-new-sites.html">
          custom domain mapping
        </Link>{" "}
        and{" "}
        <Link href="https://gsuiteupdates.googleblog.com/2018/06/end-user-rollout-for-google-sites.html">
          automatic site conversion from classic Sites to new Sites
        </Link>
        .
      </p>
    ),
    organization: {
      websiteHref: "https://www.google.com/",
      logoImagePath: "/images/pages/about/google.svg",
      name: "Google",
    },
    timeframe: {
      start: "Aug 2016",
      end: "Oct 2019",
    },
  },
  {
    blurb: (
      <p>
        This summer on the{" "}
        <Link href="https://www.facebook.com/business/news/ads-manager-app">
          Mobile Ads Manager
        </Link>{" "}
        team was my rite of passage into professional software engineering. I
        launched numerous user facing and server side features using React
        Native, added an authentication/authorization system to validate user
        actions and reduce error rates, and designed an ad-creation flow to
        improve usability. My mentor at Facebook had a profound impact on me,
        teaching me that while it's important to be a rockstar engineer from a
        technical perspective, it's even more important to empower those around
        me.
      </p>
    ),
    organization: {
      websiteHref: "https://www.facebook.com/",
      logoImagePath: "/images/pages/about/facebook.png",
      name: "Facebook",
    },
    timeframe: {
      start: "May 2015",
      end: "Aug 2015",
    },
  },
  {
    blurb: (
      <p>
        This was my first time professionally working and building something
        people actually used. I implemented an Emergency Room vitals dashboard
        used to quickly assess a patient's condition. Additionally, I redesigned
        and rewrote an existing data visualization library, reducing rendering
        latency by 50% and promoted its usage across all Epic applications. It
        was especially motivating that my work impacted health care providers
        and potentially saved patient lives.
      </p>
    ),
    organization: {
      websiteHref: "https://www.epic.com/",
      logoImagePath: "/images/pages/about/epic.png",
      name: "Epic",
    },
    timeframe: {
      start: "May 2014",
      end: "Aug 2014",
    },
  },
  {
    blurb: (
      <p>
        Paid 6-figures for a paper that says B.A. in Computer Science{" "}
        <span aria-label="Graduate with cap" role="img">
          👨🏻‍🎓
        </span>
      </p>
    ),
    organization: {
      websiteHref: "https://www.cornell.edu/",
      logoImagePath: "/images/pages/about/cornell.png",
      name: "Cornell University",
    },
    timeframe: {
      start: "Aug 2012",
      end: "May 2016",
    },
  },
];
