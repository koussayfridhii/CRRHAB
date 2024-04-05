const { nodeMailer } = require("../lib/nodeMailer");

//list : array of mails
const sendMail = async (list) => {
  const message = {
    from: `"CRRHAB 👻" ${process.env.NODE_MAILER_USER}`, // sender address
    to: list.join(", "), // list of receivers
    subject:
      "Grow Luscious Tomatoes & Attract More Butterflies This Spring!** (This combines the intrigue of tomatoes with the benefit of butterflies)", // Subject line
    html: `<h1>Hi Mr/MRS</h1><br/>,
    <p>
    Spring is here, and it's the perfect time to get your garden growing! In this week's newsletter, we've got you covered on two exciting topics:
    
    Tomato Triumph: Unleash the juiciest harvest! Our expert gardener shares their secrets to growing plump, delicious tomatoes all summer long. You'll learn about everything from choosing the right variety to watering techniques and pest control.
    Blooming Beauty: Attract Butterflies & Boost Your Garden! Want to add a touch of magic to your garden? Discover how to create a butterfly haven with the perfect selection of flowers and plants. Butterflies are not only beautiful, but they also help pollinate your other vegetables and flowers!
    Click the links below to dive into these articles and get started on your dream garden:
    </p>
    <a href="fnarc.tn">Link to Tomato Growing Article</a>
    <h2>Happy planting!</h2>
    
    <b>The team at CRRHAB</b>`, // html body
  };
  const mail = await nodeMailer(message);
  console.log(mail);
};
module.exports = sendMail;
