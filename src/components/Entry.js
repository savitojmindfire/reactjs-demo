import React from "react";
import "./entry.css";

import Form from "./utils/Form";

const Entry = ({ addEntry, data_size, label }) => {
  const [is_modal, setIsModal] = React.useState(false);
  return (
    <div className="entry">
      <button onClick={() => setIsModal(!is_modal)}>New Entry {label}</button>
      {is_modal && (
        <div className="modal">
          <button
            onClick={() => {
              setIsModal(false);
            }}
          >
            close
          </button>
          <div className="form-body">
            <Form
              closeModal={() => {
                setIsModal(false);
              }}
              onSubmit={(data) => {
                const date = new Date();
                const sent_at = date.toString();
                const entry = {
                  app_changed_at: "2021-07-29T05:02:30",
                  attachments:
                    '{"Screenshot 2021-02-19 at 3.32.48 PM.png": {"path": {"file_name": "Screenshot 2021-02-19 at 3.32.48 PM.png", "bucket_name": "staging-yoda-email-drafts", "blob_name": "ba71b609-b6ca-4d09-88a9-af5cfd137fb3-Screenshot 2021-02-19 at 3.32.48 PM.png"}, "name": "Screenshot 2021-02-19 at 3.32.48 PM.png", "size": 24004}}',
                  bcc_json: null,
                  body_html:
                    '<div class="mceEditable" style="font-size: 11pt; font-family: calibri;">\n<p data-ccp-props="{&quot;335551550&quot;:1,&quot;335551620&quot;:1,&quot;335559683&quot;:0,&quot;335559685&quot;:0,&quot;335559731&quot;:0,&quot;335559737&quot;:0,&quot;335562764&quot;:2,&quot;335562765&quot;:1,&quot;335562766&quot;:4,&quot;335562767&quot;:0,&quot;335562768&quot;:4,&quot;335562769&quot;:0}">Hi Yashira, (outreach 1)</p>\n<p>I hope all is well!&nbsp;I&rsquo;m&nbsp;following up from my previous note above about scheduling time for us to review our BrightEdge partnership and the progress made so far. I&nbsp;am looking forward to showing you the results we have achieved and&nbsp;discuss the path forward for next year.&nbsp;</p>\n<p>Would any of the following times&nbsp;below&nbsp;work for you?</p>\n<p>AVAILABLE MEETING DATES / TIMES</p>\n<p>Looking forward to connecting here soon. Have a great rest of your day.&nbsp;</p>\n<p>Best,&nbsp;&nbsp;&nbsp;</p>\n<div style="font-size: 14px; font-weight: 400; color: #666e8c;"><span style="font-weight: 600; color: #172b4d;">Saumya Shukla</span><br /><span style="font-weight: 600;">SAM title</span><br /><a href="mailto:saumya.shukla@brightedge.com" target="_blank" rel="noopener noreferrer">saumya.shukla@brightedge.com</a><br />Mobile: 9898932101&nbsp;<br />Office: office 123456&nbsp;<br />work address <br /><br /><a href="https://www.brightedge.com/share21" target="_blank" rel="noopener noreferrer"> <img src="https://passets.brightedge.com/img/yoda/Share21.jpg" alt="BrightEdge Share21" /> </a></div>\n</div>\n<hr id="previous-email" />\n<div style="color: grey; font-size: 10pt;">\n<div><strong>From:</strong> saumya.shukla@brightedge.com</div>\n<div><strong>Subject:</strong> Introduction and review of our partnership (non-AP, no KW)</div>\n<div class="mceEditable" style="font-size: 10pt;">\n<p>Hi Yashira,</p>\n<p>I hope this note finds you well! {CHOOSE 1 If new POC include following; My name is Saumya Shukla, your dedicated strategic account manager at BrightEdge. OR If worked with POC in the past include following: Insert Rapport from past interaction.}</p>\n<p>I wanted to personally reach out and thank you for partnering with us this past year.</p>\n<p>Since you&rsquo;ve joined us, we&rsquo;ve been working with you on a bi-weekly basis to work on your SEO initiatives, and I want to make sure that you&rsquo;re getting the most out of our partnership.</p>\n<p>I&rsquo;m really excited to connect and discuss our partnership. The goal of this call is to get your feedback on the partnership to date and discuss your goals going further.&nbsp;</p>\n<p>Would any of the following times work for you? I&rsquo;ll also give you a call following this email.</p>\n<ul>\n<li>Jul 29, 2021 05:00 AM PDT</li>\n<li>Aug 02, 2021 08:00 AM PDT</li>\n<li>Aug 09, 2021 08:00 AM PDT</li>\n</ul>\n<p>Thanks!</p>\n<div style="font-size: 14px; font-weight: 400; color: #666e8c;"><span style="font-weight: 600; color: #172b4d;">Saumya Shukla</span><br /><span style="font-weight: 600;">SAM title</span><br /><a href="mailto:saumya.shukla@brightedge.com" target="_blank" rel="noopener noreferrer">saumya.shukla@brightedge.com</a><br />Mobile: 9898932101&nbsp;<br />Office: office 123456&nbsp;<br />work address <br /><br /><a href="https://www.brightedge.com/share21" target="_blank" rel="noopener noreferrer"> <img src="https://passets.brightedge.com/img/yoda/Share21.jpg" alt="BrightEdge Share21" /> </a></div>\n</div>\n</div>\n',
                  cc_json: null,
                  email_type: data.email_type,
                  environment: "",
                  flow_type: 0,
                  id: data_size + 1,
                  keywords_json: null,
                  last_sam_email_sent_date: null,
                  meeting_id: null,
                  opportunity_id: "0062E00001L16sWQAR",
                  org_id: 6241,
                  recipients_json:
                    '["saumya.shukla@brightedge.com", "maitreya.upputuri@brightedge.com"]',
                  sender: data.sender,
                  sent_at,
                  subject: data.subject,
                };

                addEntry(entry);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Entry;
