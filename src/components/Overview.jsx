import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Overview = () => {
  useGSAP(() => {
    gsap.to("#overview", { opacity: 1, delay: 0.5 });
    gsap.to("#summary", { opacity: 1, delay: 0.75 });
    // gsap.to("#cta", { opacity: 1, y: -80, delay: 2 });
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-black relative">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="overview" className="section-heading">
            Mini-Project: Spotify Wrapped
          </h1>
          <h2 id="summary" className="section-subheading">
            Re-imagining Shareholder Reports
          </h2>

          <p>
            Initially, I set out to redesign Spotify's Investor Relations
            Website with the thought of "What if Spotify's website looked like
            Apple designed it?" As I looked through Spotify's website, I
            realized that I didn't LOVE Spotify's website in the way that I
            LOVED Spotify as a platform! I think Spotify's website could be a
            bit more... shall I say, hip?
          </p>
          <p>
            If you know me, you would have never imagined me to be someone would
            be able to Design. I wear the same 5 outfits on rotation, and you'll
            only see me in 2 colors: black and navy blue. Prior to setting out
            to do this project, I had never used Figma to make something. I used
            it for FigJams and used it to implement designed. Nevertheless, it
            was super interesting to think about Design. This project is
            definitely not perfect, but if my perfectionistic tendencies had it
            their way, this would have never seen the light of day.
          </p>

          <h3>Initial Reaction to Spotify's Website</h3>
          <p>
            When you click on the NavBar contents like "Financials",
            "Governance", "About", "Podcasts", etc, only the "About" takes you
            to a page. You have to hover and select the specific page you want
            to go to for the other items. I think that it would be nice to have
            a landing page for each.
          </p>
          <p>
            I was surprised that the pages were purple. This is a pretty
            insignificant aspect, but I only ever associated black, white, and
            green with the Company's image. I wonder if this is intentional for
            Spotify's Investor Relations, but at times, the dark purple with the
            black text is hard to read.
          </p>
          <p>
            I definitely want to try redesigning it in the future as a personal
            project. Despite my initial project being a Spotify website in the
            theme of an Apple website, I think I'll change my vision and make it
            very "Spotify-like". I always believe that whether it's a personal
            website, an advertisement, or even merchandise, small details have a
            lasting impression on consumers. For example, Google Chrome had a
            15-30 second ad with the slogan "No Place Like Chrome". They showed
            the Chrome logo, then the phase "No Place Like Chrome" with the "o"
            in "Chrome" replaced with the Chrome logo. Clever! BUT! The spacing
            looked awkward. Now, whenever I think of that ad, I only remember
            the awkward spacing and not the actual content.
          </p>
          <p>
            This got me thinking about punctuation errors. A weird connection,
            but stay with me. Often, the overall message can be interpreted and
            assumed with the presence of a few punctuation errors. However, when
            a reader sees a misplaced comma or an incorrectly spelled word, they
            often forget about the contents of the writing and get distracted by
            the punctuation error. Similarly, even after I watched the entire
            Chrome ad, the 2 second slogan remained my only impression of the
            ad. I realized that as a developer, I needed to be more aware and
            interested in design.
          </p>
          <h2>Shareholder's Report</h2>
          <p>
            Spotify wrapped is a summary of the user's yearly activity. It's one
            of Spotify's iconic features, and dare I say it, it might be the
            most iconic/impactful feature. I know friends that changed from
            Apple Music to Spotify just for the Wrapped.
          </p>
          <p>
            A shareholder's report is a summary and overview of Spotify's
            quarterly performance, and I thought that it would be nice to have
            Spotify's report in the wrapped format to display on the website.
            The website looks a bit empty, and I felt that it would give a nice
            pop! Of course, the shareholder report isn't always something you
            want to show front and center of the website, but also, according to
            some psychologists, it may help boost performance subconsiously due
            to accountability and all that jazz.
          </p>
          <h3>My Rational/Approach</h3>
          <p>
            Another user on Figma put up a template of Spotify Wrapped for
            people to make their own wrapped to display their work as a product
            designer. I used this template to get started. For colors, I used
            the same teal and navy blue as the Shareholder's report. Assets I
            used were either provided by the initial template or other Figma
            templates that I have included below.
          </p>
          <p>
            In the overview pages (Page 2-4), I used the rainbow assets from
            Spotify's Wrapped to represent the diversity of Spotify's user base,
            as the Shareholder report mentions the countries of Spotify's MAUs
            and the actual metrics of MAUs and Premium Subscribers in their
            overview.
          </p>
          <p>
            Next, for finances, the section opens up with the phrase "Going up
            the $cale in Q2" to reference both finances and music. I wanted this
            section to look Y2K to reference the aesthetics of the dot-com boom-
            I think that finances are so y2k. Explaining the titles, Revving Up:
            Revenue is a pun to show the surge of Spotify's revenue, Worth It
            and Bills, Bills, Bill are both references to songs. In true Spotify
            manner, there is a Spotify code in the Free Cash Flow slide that
            takes you to "Bills, Bills, Bills" by Destiny's Child.
          </p>
          <p>
            "Stepping up onto the Platform" references Spotify's Music Platform
            as well as an artist's physical performance platform. For this
            section, I added circles to each page to represent a spotlight, as
            this section showcases Spotify's new and upcoming features. To
            change things up and not bore the viewer, the background colors for
            Listening Parties, AI Playlists, and Growing Discovery are
            different, but all are cool toned. Following these pages, I used
            black backgrounds to tie the three "new user experiences" pages
            together. As the images are green, red, and yellow, I felt that
            black would look best.
          </p>
          <p>
            With the advertising innovation slides, I wanted to create some
            overall cyclicity of the entire wrapped, so the final slides are
            similar to the green hued backgrounds of the beginning pages. The
            "EXPANDING ADVERTISING INNOVATION" slide uses the same green as the
            Shareholder's report as well, and because of the large amount of
            written content on this page, I added another song that would
            ideally start playing when the user gets to this page to make it
            more enjoyable to read through.
          </p>
          <p>
            Finally, I used the same color of Spotify's 2023 Wrapped for the
            Outlook for Q3'24, because it's brighter and more exciting- brighter
            colors to represent these bright Q3 outlooks! The Wrapped ends with
            a simple page with just the Spotify logo. Personally, I think that
            having an ending with just the logo and nothing else sends the
            message "We are Spotify" and leaves a solid impact. *Mic Drop*
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
