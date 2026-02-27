import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'bootstrap';

function App() {

  return (
    // react Fragment
    <>

      <div className='gmail-container'>
        {/* header */}
        <header className='gmail-header border-bottom'>
          <div className='d-flex'>
            <button className="btn">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="#5f6368"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
            </button>
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
              alt="gmail-img"
            />
          </div>
          <InputGroup className="header-search mx-auto">
            <InputGroup.Text id="basic-addon1" className='bg-transparent border-0'>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="#5f6368"
                  d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"
                />
              </svg>
            </InputGroup.Text>
            <Form.Control className='bg-transparent border-0'
            />
            <InputGroup.Text id="basic-addon1" className='bg-transparent border-0'>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="#5f6368"
                  d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                />
              </svg>
            </InputGroup.Text>
          </InputGroup>
          <div className='d-flex align-items-center'>
            <button className='btn'>
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
                />
              </svg>
            </button>
            <button className='btn'>
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"
                />
                <circle fill="#5f6368" cx="12" cy="12" r="3.5" />
              </svg>
            </button>
            <button className='btn'>
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
              </svg>

            </button>
            <div
              className='profile-icon rounded-circle bg-danger text-white d-flex align-items-center justify-content-center'
              style={{
                width: "32px",
                height: "32px",
                fontSize: "14px",
                fontWeight: "500"
              }}
            >
              N
            </div>
          </div>

        </header>
        <div className='container-fluid'>
          <div className='row h-100'>
            {/* side bar */}
            <div className='col-md-2 sidebar'>
              <button className="btn compose-btn d-flex  gap-3 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
                Compose
              </button>

              <ul className='flex-column sidebar-nav'>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-inbox" viewBox="0 0 16 16">
                    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                  </svg>

                  Inbox</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                  </svg>
                  Starred</li>
                <li className='nav-item'>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>

                  Snoozed</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                  </svg>
                  Sent</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                  </svg>
                  Drafts</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                  Purchases</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bus-front" viewBox="0 0 16 16">
                    <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44 44 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43 43 0 0 0 8 3" />
                    <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A44 44 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2zM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A43 43 0 0 1 8 1" />
                  </svg>
                  Travel</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                  </svg>
                  Less</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-exclamation-fill" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                  Important</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4-week" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  Scheduled</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  All Mail</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                  </svg>
                  Spam</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  Trash</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-rss" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1" />
                  </svg>
                  subscriptions</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
                    <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" />
                    <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z" />
                  </svg>
                  Manage labels</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                  </svg>
                  Create new label</li>

              </ul>
            </div>

            {/* main content */}


            <div className='col-md 10 main-content'>
              <div className='box-1'>


                <header className='header2' >
                  <div className='icons '>
                    <span >
                      <button className='btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                          <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z" />
                        </svg>
                      </button>
                      <button className='btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg>
                      </button>

                      <button className='btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                        </svg>
                      </button>
                      <button className='btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                      </button>

                    </span>
                    <span>
                      <button className='btn'>
                        1-50 of 115
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                      </button>
                      <button className='btn '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg>
                      </button>
                      <button className='btn '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                      </button>
                      <button className='btn '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-keyboard-fill" viewBox="0 0 16 16">
                          <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm13 .25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25M2.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 8.75v-.5A.25.25 0 0 0 2.75 8zM4 8.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 5 8.75v-.5A.25.25 0 0 0 4.75 8h-.5a.25.25 0 0 0-.25.25M6.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 7 8.75v-.5A.25.25 0 0 0 6.75 8zM8 8.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 9 8.75v-.5A.25.25 0 0 0 8.75 8h-.5a.25.25 0 0 0-.25.25M13.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-3-2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm.75 2.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25M11.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM9 6.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5A.25.25 0 0 0 9.75 6h-.5a.25.25 0 0 0-.25.25M7.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 8 6.75v-.5A.25.25 0 0 0 7.75 6zM5 6.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 6 6.75v-.5A.25.25 0 0 0 5.75 6h-.5a.25.25 0 0 0-.25.25M2.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 4 6.75v-.5A.25.25 0 0 0 3.75 6zM2 10.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25M4.25 10a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25z" />
                        </svg>
                      </button>
                      <button className='btn'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                      </button>
                    </span>


                  </div>

                </header>
                <div className='container-2'>
                  <div className='row'>
                    <div className='col-md-3 font'>
                      <li className='nav-item2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-inboxes-fill" viewBox="0 0 16 16">
                          <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z" />
                        </svg>
                        Primary
                      </li>
                    </div>
                    <div className='col-md-3 font'>
                      <li className='nav-item2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
                          <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z" />
                        </svg>
                        Promotions
                      </li>
                    </div>
                    <div className='col-md-3 font'>
                      <li className='nav-item2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                        </svg>
                        Social
                      </li>
                    </div>
                    <div className='col-md-3 font'>
                      <li className='nav-item2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tropical-storm" viewBox="0 0 16 16">
                          <path d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                          <path d="M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2M8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
                        </svg>
                        Updates</li>
                    </div>

                  </div>

                </div>


                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom read'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'>Google security</span>
                    <span className='subject flex-grow-1 p-2'>
                      Security Alert: New sign-in detected{"  "}
                      <span className='snippet'>
                        -We noticed a new login to your account from Chrome on Windows.
                      </span>
                    </span>
                    <span className='time p-2'> 9:42 AM</span>
                  </div>

                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unread'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'>Amazon India</span>
                    <span className='subject flex-grow-1 p-2'>
                      Your order has been shipped{"  "}
                      <span className='snippet'>
                        -  Your package is on the way and will arrive by 18 Feb.
                      </span>
                    </span>
                    <span className='time p-2'>  8:15 AM</span>
                  </div>

                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom read'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> LinkedIn</span>
                    <span className='subject flex-grow-1 p-2'>
                      You have 3 new connection requests{"  "}
                      <span className='snippet'>
                        -    See who wants to connect with you this week.
                      </span>
                    </span>
                    <span className='time p-2'>Yesterday</span>
                  </div>

                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unread'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'>GitHub</span>
                    <span className='subject flex-grow-1 p-2'>
                      New sign-in from a new device{"  "}
                      <span className='snippet'>
                        -  We detected a login from Mumbai, Maharashtra.
                      </span>
                    </span>
                    <span className='time p-2'> 11:30 PM</span>
                  </div>

                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unread'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'>Paytm</span>
                    <span className='subject flex-grow-1 p-2'>
                      Payment successfu{"  "}
                      <span className='snippet'>
                        -  ₹1,250 has been debited from your account.
                      </span>
                    </span>
                    <span className='time p-2'> 7:05 AM</span>
                  </div>

                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unread' >
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Netflix</span>
                    <span className='subject flex-grow-1 p-2'>
                      New device started streaming{"  "}
                      <span className='snippet'>
                        - Your account is being used on a new device.
                      </span>
                    </span>
                    <span className='time p-2'> Monday</span>
                  </div>

                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom read'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Flipkarte</span>
                    <span className='subject flex-grow-1 p-2'>
                      Big Billion Days is live!{"  "}
                      <span className='snippet'>
                        - Grab up to 70% off on electronics and fashion.
                      </span>
                    </span>
                    <span className='time p-2'>  2:10 PM</span>
                  </div>

                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom read'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'>Swiggy</span>
                    <span className='subject flex-grow-1 p-2'>
                      60% OFF on your favorite restaurants{"  "}
                      <span className='snippet'>
                        -Order now and enjoy free delivery today.
                      </span>
                    </span>
                    <span className='time p-2'>  1:05 PM</span>
                  </div>

                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom read'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> HDFC Bank</span>
                    <span className='subject flex-grow-1 p-2'>
                      Monthly Account Statement – January 2026{"  "}
                      <span className='snippet'>
                        -  Your account statement is now available for download.
                      </span>
                    </span>
                    <span className='time p-2'> 10 Feb</span>
                  </div>

                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unread'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'>  Instagram</span>
                    <span className='subject flex-grow-1 p-2'>
                      New login to your account{"  "}
                      <span className='snippet'>
                        -   We noticed a login from a new location.
                      </span>
                    </span>
                    <span className='time p-2'>  5:40 PM</span>
                  </div>

                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unread'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom read'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom raed'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unraed'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unread'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom raed'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unraed'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom read'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom raed'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unraed'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom unraed'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom read'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom raed'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{"  "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>
                </div>
                <div className='email-list box-1'>
                  <div className='email-row d-flex align-items-center border-bottom read'>
                    <Form.Check type='checkbox' className='email-checkbox p-2' />
                    <button variant="link" className='star-btn p-0 btn p-2'>
                      ☆
                    </button>
                    <span className='sender p-2'> Zoom</span>
                    <span className='subject flex-grow-1 p-2'>
                      Meeting Reminder: Project Discussion{" "}
                      <span className='snippet'>
                        -   Your meeting starts in 30 minutes. Join now.
                      </span>
                    </span>
                    <span className='time p-2'> 10.30 AM</span>
                  </div>


                </div>
              </div>
              <div className='email-list box-2'>
                <ul className=''>
                  <li className='nav-i'>
                    <img src='data:image/png;base64,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' width="45" height="45" alt='' />
                  </li>
                  <li className='nav-i'>
                    <img src='data:image/jpeg;base64,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' width="35" height="35" alt='' />
                  </li>
                  <li className='nav-i'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/1280px-Google_Tasks_2021.svg.png?_=20220723122708' width="35" height="35" alt='' />

                  </li>
                  <li className='nav-i'>
                    <img src='data:image/png;base64,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' width="35" height="35" alt='' />

                  </li>
                </ul>
              </div>


            </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default App