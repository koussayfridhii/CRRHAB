const { nodeMailer } = require("../lib/nodeMailer");

//list : array of mails
const sendMail = async (
  list,
  actuality = "",
  description = "",
  link = "#",
  media = ""
) => {
  const message = {
    from: `"CRRHAB" ${process.env.NODE_MAILER_USER}`, // sender address
    to: list.join(", "), // list of receivers
    subject: "CRRHAB News", // Subject line
    html: `<h1>Hi Mr/MRS</h1><br/>,
    <h1>
    ${title}
    </h1>
    <p>
    ${description}
    </p>

    <img src="${media}" alt="media" />
    <a href="${link}">Link </a>
    
    <b>The team of CRRHAB</b>`, // html body
  };
  const mail = await nodeMailer(message);
  console.log(mail);
};
module.exports = sendMail;
