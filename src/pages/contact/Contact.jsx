import React, { useContext } from "react";
import Banner from "../../components/Banner";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./contact.css";
import { Helmet } from "react-helmet";
import NoteContext from "../../context/notes/NoteContext";
const Contact = ({ Pagetitle, Seodata }) => {
  const { Footer, Location, DataToarrange } = useContext(NoteContext);
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    Name: "",
    Subject: "",
    Description: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, Name, Subject, Description, number } = formData;

    fetch(`https://eazotel.eazotel.com/api/dashboard/editcontact`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Domain: "bhairahawagardenresort", // Replace with your actual domain value
        email: email,
        Name: Name,
        Contact: number,
        Subject: Subject,
        Description: Description,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to submit contact form");
        }
      })
      .then((data) => {
        console.log(data);
        alert("Your query submitted");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to submit contact form");
      });
  };

  return (
    <>
      <Helmet>
        <link rel="icon" href={Footer.Logo} />
        <title>{Seodata.Title}</title>
        <meta name="description" content={Seodata.Description} />
      </Helmet>

      <section className="about-banner">
        <Banner text={Pagetitle["Title"]} Image={Pagetitle["Image"]} />
      </section>

      <section className="contact-section w-100">
        <div className="container contact-wrapper w-100">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="row contact-row">
                <div className="col-12 first-col">
                  <h4>GET IN TOUCH</h4>
                  <p>{DataToarrange[4].Text}</p>
                </div>

                <div className="row mt-4 contact-row">
                  <div className="col-12">
                    <h4>CONTACT DETAILS</h4>
                  </div>
                  <div className="col-12 contact-row-iner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M1.58399 4.93194C1.29015 3.31997 2.65835 1.86957 4.74845 1.33738C5.11955 1.24295 5.52001 1.26978 5.86813 1.4124C6.21626 1.55503 6.48582 1.8027 6.62182 2.10489L7.29204 3.59248C7.3998 3.83176 7.41912 4.09236 7.34753 4.34084C7.27593 4.58932 7.11669 4.81436 6.89022 4.98709L4.89653 6.50737C4.7982 6.58247 4.72493 6.67745 4.68385 6.78307C4.64276 6.88869 4.63526 7.00135 4.66207 7.1101L4.67981 7.17678L4.72917 7.34414C4.77313 7.4852 4.83946 7.68397 4.93278 7.92122C5.11788 8.3925 5.41327 9.026 5.85288 9.65887C6.2925 10.2917 6.80461 10.8214 7.20258 11.1901C7.40984 11.382 7.62649 11.5668 7.85197 11.744L7.91367 11.7915C8.0134 11.8649 8.13429 11.9156 8.26459 11.9387C8.39488 11.9617 8.53013 11.9563 8.65716 11.9229L11.2378 11.2478C11.531 11.1711 11.845 11.1691 12.1397 11.2418C12.4343 11.3146 12.696 11.4589 12.8913 11.6562L14.1122 12.8886C14.6213 13.4016 14.5611 14.1556 13.9757 14.6089C12.3761 15.8484 10.1765 16.1029 8.64637 15.0796C6.77079 13.8219 5.18961 12.2881 3.98182 10.5546C2.76405 8.82232 1.95054 6.91512 1.58399 4.93194ZM6.27784 7.19409L7.93296 5.93221C8.38589 5.58676 8.70438 5.13668 8.84757 4.63972C8.99076 4.14276 8.95212 3.62157 8.7366 3.14299L8.06561 1.65541C7.79187 1.04764 7.24963 0.549531 6.54943 0.262636C5.84923 -0.0242588 5.04377 -0.0783456 4.29726 0.111401C1.70199 0.772479 -0.381934 2.70698 0.0592237 5.12366C0.454875 7.26656 1.33327 9.32817 2.64832 11.2003C3.95103 13.0696 5.65639 14.7237 7.67921 16.0798C9.97369 17.6123 13.0387 17.0897 15.0277 15.5476C15.5969 15.1066 15.9422 14.5017 15.9934 13.8563C16.0445 13.2109 15.7977 12.5736 15.3031 12.0743L14.0822 10.8419C13.6915 10.4472 13.1678 10.1585 12.5784 10.013C11.989 9.86741 11.3608 9.8716 10.7743 10.025L8.63248 10.5854C8.53661 10.5034 8.44276 10.4198 8.35098 10.3347C7.91081 9.92983 7.52137 9.48876 7.1887 9.01831C6.86484 8.54348 6.59996 8.04247 6.39816 7.52303C6.35537 7.41429 6.31525 7.30484 6.27784 7.19474"
                        fill="#724827"
                      />
                    </svg>
                    <div className="contact-phone">
                      <span>{Footer.Phone}</span>&nbsp;
                      <span>{Footer.WhatsApp}</span>
                    </div>
                  </div>
                  <div className="col-12 contact-row-iner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                    >
                      <mask id="path-1-inside-1_189_1581" fill="white">
                        <path d="M0.5 0.5V0C0.367392 0 0.240215 0.0526785 0.146447 0.146447C0.0526785 0.240215 0 0.367392 0 0.5H0.5ZM18.5 0.5H19C19 0.367392 18.9473 0.240215 18.8536 0.146447C18.7598 0.0526785 18.6326 0 18.5 0V0.5ZM0.5 1H18.5V0H0.5V1ZM18 0.5V12.5H19V0.5H18ZM16.5 14H2.5V15H16.5V14ZM1 12.5V0.5H0V12.5H1ZM2.5 14C2.10218 14 1.72064 13.842 1.43934 13.5607C1.15804 13.2794 1 12.8978 1 12.5H0C0 13.163 0.263392 13.7989 0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15V14ZM18 12.5C18 12.8978 17.842 13.2794 17.5607 13.5607C17.2794 13.842 16.8978 14 16.5 14V15C17.163 15 17.7989 14.7366 18.2678 14.2678C18.7366 13.7989 19 13.163 19 12.5H18Z" />
                      </mask>
                      <path
                        d="M0.5 0.5V0C0.367392 0 0.240215 0.0526785 0.146447 0.146447C0.0526785 0.240215 0 0.367392 0 0.5H0.5ZM18.5 0.5H19C19 0.367392 18.9473 0.240215 18.8536 0.146447C18.7598 0.0526785 18.6326 0 18.5 0V0.5ZM0.5 1H18.5V0H0.5V1ZM18 0.5V12.5H19V0.5H18ZM16.5 14H2.5V15H16.5V14ZM1 12.5V0.5H0V12.5H1ZM2.5 14C2.10218 14 1.72064 13.842 1.43934 13.5607C1.15804 13.2794 1 12.8978 1 12.5H0C0 13.163 0.263392 13.7989 0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15V14ZM18 12.5C18 12.8978 17.842 13.2794 17.5607 13.5607C17.2794 13.842 16.8978 14 16.5 14V15C17.163 15 17.7989 14.7366 18.2678 14.2678C18.7366 13.7989 19 13.163 19 12.5H18Z"
                        fill="white"
                      />
                      <path
                        d="M18 13H19V12H18V13ZM2 14V15H3V14H2ZM17 15V14H16V15H17ZM0 13H1V12H0V13ZM0.5 0.5V1.5H1.5V0.5H0.5ZM18.5 0.5H17.5V1.5H18.5V0.5ZM0.5 1H-0.5V2H0.5V1ZM18.5 1V2H19.5V1H18.5ZM18 0.5V-0.5H17V0.5H18ZM16.5 15V16V15ZM1 0.5H2V-0.5H1V0.5ZM1.5 0.5V0H-0.5V0.5H1.5ZM0.5 -1C0.102175 -1 -0.279356 -0.841964 -0.56066 -0.56066L0.853553 0.853553C0.759786 0.947321 0.632609 1 0.5 1V-1ZM-0.56066 -0.56066C-0.841964 -0.279356 -1 0.102175 -1 0.5H1C1 0.632609 0.947321 0.759786 0.853553 0.853553L-0.56066 -0.56066ZM0 1.5H0.5V-0.5H0V1.5ZM18.5 1.5H19V-0.5H18.5V1.5ZM20 0.5C20 0.102177 19.842 -0.279354 19.5607 -0.56066L18.1464 0.853553C18.0527 0.759784 18 0.632607 18 0.5H20ZM19.5607 -0.56066C19.2794 -0.841965 18.8978 -1 18.5 -1V1C18.3674 1 18.2402 0.947322 18.1464 0.853553L19.5607 -0.56066ZM17.5 0V0.5H19.5V0H17.5ZM0.5 2H18.5V0H0.5V2ZM19.5 1V0H17.5V1H19.5ZM18.5 -1H0.5V1H18.5V-1ZM-0.5 0V1H1.5V0H-0.5ZM17 0.5V12.5H19V0.5H17ZM20 12.5V0.5H18V12.5H20ZM19 -0.5H18V1.5H19V-0.5ZM16.5 13H2.5V15H16.5V13ZM2.5 16H16.5V14H2.5V16ZM2 12.5V0.5H0V12.5H2ZM1 -0.5H0V1.5H1V-0.5ZM-1 0.5V12.5H1V0.5H-1ZM2.5 13C2.36739 13 2.24022 12.9473 2.14645 12.8536L0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15V13ZM2.14645 12.8536C2.05268 12.7598 2 12.6326 2 12.5H0C0 13.163 0.263393 13.7989 0.732233 14.2678L2.14645 12.8536ZM-1 12.5C-1 13.4283 -0.631251 14.3185 0.0251263 14.9749L1.43934 13.5607C1.15804 13.2794 1 12.8978 1 12.5H-1ZM0.0251263 14.9749C0.681504 15.6313 1.57174 16 2.5 16V14C2.10218 14 1.72064 13.842 1.43934 13.5607L0.0251263 14.9749ZM17 12.5C17 12.6326 16.9473 12.7598 16.8536 12.8536L18.2678 14.2678C18.7366 13.7989 19 13.163 19 12.5H17ZM16.8536 12.8536C16.7598 12.9473 16.6326 13 16.5 13V15C17.163 15 17.7989 14.7366 18.2678 14.2678L16.8536 12.8536ZM16.5 16C17.4283 16 18.3185 15.6313 18.9749 14.9749L17.5607 13.5607C17.2794 13.842 16.8978 14 16.5 14V16ZM18.9749 14.9749C19.6313 14.3185 20 13.4283 20 12.5H18C18 12.8978 17.842 13.2794 17.5607 13.5607L18.9749 14.9749Z"
                        fill="#724827"
                        mask="url(#path-1-inside-1_189_1581)"
                      />
                      <path
                        d="M0.5 0.5L9.5 9.5L18.5 0.5"
                        stroke="#282828"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>{Footer.Email}</span>
                  </div>
                  <div className="col-12 contact-row-iner contact-address-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="18"
                      viewBox="0 0 15 18"
                      fill="none"
                    >
                      <path
                        d="M7.07171 10.286C6.43598 10.286 5.81453 10.0975 5.28595 9.74429C4.75736 9.3911 4.34538 8.8891 4.1021 8.30176C3.85881 7.71443 3.79516 7.06814 3.91918 6.44463C4.04321 5.82112 4.34934 5.24839 4.79887 4.79887C5.24839 4.34934 5.82112 4.04321 6.44463 3.91918C7.06814 3.79516 7.71443 3.85881 8.30176 4.1021C8.8891 4.34538 9.3911 4.75736 9.74429 5.28595C10.0975 5.81453 10.286 6.43598 10.286 7.07171C10.285 7.92388 9.946 8.74085 9.34343 9.34343C8.74085 9.946 7.92388 10.285 7.07171 10.286ZM7.07171 5.14314C6.69027 5.14314 6.3174 5.25625 6.00025 5.46816C5.6831 5.68008 5.43591 5.98128 5.28994 6.33368C5.14397 6.68608 5.10578 7.07385 5.18019 7.44795C5.25461 7.82206 5.43829 8.1657 5.708 8.43542C5.97772 8.70513 6.32136 8.88881 6.69546 8.96322C7.06957 9.03764 7.45734 8.99945 7.80974 8.85348C8.16214 8.70751 8.46334 8.46032 8.67526 8.14317C8.88717 7.82601 9.00028 7.45314 9.00028 7.07171C8.99977 6.56038 8.79642 6.07013 8.43485 5.70857C8.07328 5.347 7.58304 5.14365 7.07171 5.14314Z"
                        fill="#724827"
                      />
                      <path
                        d="M7.07144 18L1.64829 11.6042C1.57294 11.5082 1.49836 11.4115 1.42458 11.3143C0.498209 10.094 -0.00223791 8.6035 7.52328e-06 7.07143C7.52328e-06 5.19597 0.745031 3.39732 2.07118 2.07117C3.39733 0.745024 5.19598 0 7.07144 0C8.9469 0 10.7455 0.745024 12.0717 2.07117C13.3978 3.39732 14.1429 5.19597 14.1429 7.07143C14.1451 8.60281 13.6449 10.0926 12.7189 11.3124L12.7183 11.3143C12.7183 11.3143 12.5254 11.5676 12.4965 11.6016L7.07144 18ZM2.45122 10.5396C2.45122 10.5396 2.60101 10.7376 2.63508 10.7801L7.07144 16.0123L11.5136 10.773C11.5419 10.7376 11.6923 10.5384 11.6929 10.5377C12.4497 9.54072 12.8586 8.32309 12.8572 7.07143C12.8572 5.53696 12.2476 4.06534 11.1626 2.98031C10.0775 1.89528 8.6059 1.28571 7.07144 1.28571C5.53697 1.28571 4.06535 1.89528 2.98032 2.98031C1.89529 4.06534 1.28572 5.53696 1.28572 7.07143C1.28437 8.32387 1.69379 9.54219 2.45122 10.5396Z"
                        fill="#724827"
                      />
                    </svg>
                    {/* <p>Bhairahawa Garden Resort, Siddharthnagar, Lumbini,Nepal</p> */}
                    <p>
                      {Footer.Address},{Footer.City}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 contact-form">
              <h4>FILL THE FORM</h4>
              <div noValidate validated={validated}>
                <Row className="mb-3 form-row">
                  <Form.Group as={Col} md="12">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Name"
                      id="Name"
                      value={formData.Name}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12">
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      id="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Phone Number.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="12">
                    {/* <Form.Label>Username</Form.Label> */}
                    <InputGroup hasValidation>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a Email.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="12">
                    {/* <Form.Label>Username</Form.Label> */}
                    <InputGroup hasValidation>
                      <Form.Control
                        type="email"
                        placeholder="Subject"
                        aria-describedby="inputGroupPrepend"
                        id="Subject"
                        value={formData.Subject}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a Email.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} md="12">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      id="Description"
                      value={formData.Description}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button
                  className="contact-btn"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Submit form
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <iframe
          src={Location}
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
