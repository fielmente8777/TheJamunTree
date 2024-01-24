import React, { useState, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './checking.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import NoteContext from '../../context/notes/NoteContext';
const Checks = () => {
    const { Engine } = useContext(NoteContext);
    const [room, setRoom] = useState(0);
    const [adult, setAdult] = useState(0)
    const [child, setChild] = useState(0)

    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [adults, setAdults] = useState(1);
    const [kids, setKids] = useState(0);
    // const [rooms, set] = useState(0);



    const handleCheckInChange = (e) => {
        setCheckIn(e.target.value);
    };

    const handleCheckOutChange = (e) => {
        setCheckOut(e.target.value);
    };


    // const handleRoomsChange = (e) => {
    //     const newValue = e.target.value;
    //     setRoom(e.target.value, newValue);
    //     roomIncrement(newValue)
    //     roomDecrement(newValue)
    // };

    const roomIncrement = () => {
        setRoom(room + 1);
    };
    const roomDecrement = () => {
        // setRoom(room - 1);
        if (room > 0) {
            setRoom(room - 1);

        } else {
            setRoom(0);

        }
    }

    const handleAdultsChange = (e) => {
        setAdults(e.target.value);
    };

    const adultIncrement = (value) => {

        if (adult < 4) {
            setAdult(adult + 1, value)

        } else {
            setAdult(4)
        }
    }
    const adultDecrement = (value) => {
        if (adult > 0) {
            setAdult(adult - 1, value)
        } else {
            setAdult(0)
        }
    }

    const handleKidsChange = (e) => {
        setKids(e.target.value);
    };

    const childIncrement = () => {
        setChild(child + 1)
    }
    const childDecrement = () => {
        if (child > 0) {
            setChild(child - 1)
        } else {
            setChild(0)
        }
    }





    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission
        console.log('Form submitted:', { checkIn, checkOut, room, adult, child });
    };

    return (
        <>
            <div className="checks-main">

                <div>
                    <Container className='checks-wrapper'>
                        <Row className='checkig-row'>
                            <Col className='col-3 checking-col'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#8A1412" />
                                </svg>
                                <div className="cheks-input-div">
                                    <label htmlFor="#">Check In</label>
                                    <input type="date" name="date" id="date" value={checkIn} onChange={handleCheckInChange} required />
                                </div>
                            </Col>
                            <Col className='col-3 checking-col'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#8A1412" />
                                </svg>
                                <div className="cheks-input-div">
                                    <label htmlFor="#">Check Out</label>
                                    <input type="date" name="date" id="date" value={checkOut} onChange={handleCheckOutChange} required />
                                </div>
                            </Col>
                            <Col className='col-3 checking-col'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path d="M3.20789 5.78862C3.20807 4.79057 3.43313 3.80953 3.86123 2.94069C4.28932 2.07185 4.90592 1.34472 5.65118 0.829859C6.39643 0.315002 7.24504 0.0299022 8.11466 0.00222685C8.98427 -0.0254485 9.84535 0.20524 10.6143 0.671907C11.3833 1.13857 12.0341 1.82537 12.5035 2.66565C12.973 3.50592 13.2451 4.47114 13.2935 5.46764C13.3419 6.46414 13.165 7.45808 12.7798 8.35299C12.3947 9.24791 11.8145 10.0134 11.0954 10.5752C12.6439 11.2268 13.9869 12.395 14.9517 13.9296C15.9165 15.4643 16.4589 17.295 16.5092 19.1863C16.507 19.3902 16.4363 19.5853 16.3118 19.7307C16.1872 19.8762 16.0185 19.9609 15.8408 19.967C15.6631 19.9731 15.4903 19.9002 15.3583 19.7636C15.2264 19.6269 15.1456 19.437 15.1328 19.2336C15.0782 17.1824 14.3295 15.2362 13.0455 13.8074C11.7614 12.3787 10.0429 11.5796 8.25414 11.5796C6.46536 11.5796 4.74686 12.3787 3.46282 13.8074C2.17879 15.2362 1.43012 17.1824 1.37548 19.2336C1.36629 19.4398 1.28709 19.6336 1.15485 19.7736C1.02261 19.9136 0.847847 19.9886 0.667996 19.9825C0.488145 19.9764 0.317515 19.8898 0.192658 19.7412C0.0678021 19.5926 -0.00134876 19.3937 1.99371e-05 19.1873C0.0500754 17.2959 0.592418 15.4649 1.55724 13.9301C2.52206 12.3953 3.8652 11.2268 5.41376 10.5752C4.73368 10.0443 4.17713 9.33054 3.79264 8.49622C3.40815 7.66191 3.2074 6.73236 3.20789 5.78862ZM8.2546 1.57784C7.28117 1.57784 6.3476 2.02147 5.65928 2.81114C4.97096 3.60082 4.58427 4.67185 4.58427 5.78862C4.58427 6.90538 4.97096 7.97641 5.65928 8.76609C6.3476 9.55576 7.28117 9.9994 8.2546 9.9994C9.22803 9.9994 10.1616 9.55576 10.8499 8.76609C11.5382 7.97641 11.9249 6.90538 11.9249 5.78862C11.9249 4.67185 11.5382 3.60082 10.8499 2.81114C10.1616 2.02147 9.22803 1.57784 8.2546 1.57784ZM15.8614 5.78862C15.7256 5.78862 15.5934 5.79914 15.4631 5.8202C15.3722 5.83888 15.2788 5.83636 15.1887 5.81277C15.0986 5.78919 15.0136 5.74502 14.9387 5.68291C14.8638 5.6208 14.8006 5.54202 14.7528 5.45127C14.705 5.36052 14.6736 5.25965 14.6606 5.15469C14.6475 5.04973 14.653 4.94283 14.6767 4.84035C14.7004 4.73788 14.7419 4.64194 14.7987 4.55825C14.8554 4.47457 14.9263 4.40485 15.007 4.35327C15.0877 4.30168 15.1767 4.26928 15.2686 4.258C16.1812 4.10662 17.1118 4.30768 17.9139 4.82953C18.716 5.35138 19.344 6.16439 19.6993 7.14062C20.0545 8.11685 20.1166 9.20087 19.876 10.2221C19.6354 11.2433 19.1056 12.1437 18.37 12.7817C19.4513 13.3371 20.3694 14.2397 21.0135 15.3804C21.6576 16.5211 22.0002 17.8513 22 19.2105C22 19.4199 21.9275 19.6207 21.7984 19.7688C21.6694 19.9168 21.4943 20 21.3118 20C21.1293 20 20.9543 19.9168 20.8252 19.7688C20.6961 19.6207 20.6236 19.4199 20.6236 19.2105C20.6235 18.0358 20.2936 16.8925 19.6828 15.9497C19.0719 15.007 18.2127 14.3151 17.2322 13.9765L16.7422 13.808V12.0437L17.1185 11.8237C17.6761 11.4996 18.1223 10.9694 18.385 10.3186C18.6477 9.66783 18.7115 8.93447 18.5662 8.23693C18.421 7.53939 18.075 6.91838 17.5842 6.47416C17.0934 6.02994 16.4865 5.78842 15.8614 5.78862Z" fill="#8A1412" />
                                </svg>

                                <div className="cheks-input-div">
                                    <label htmlFor="#">Guests</label>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            {room} Room, {adult} Adult, {child} Kid
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <div className='d-flex flex-direction-column count-drop-div'>
                                                <div className="row">
                                                    <div className="col-12 count-div">
                                                        <label>Room</label>
                                                        <div className="row counter">
                                                            <button onClick={roomDecrement}>-</button>
                                                            <span>{room}</span>
                                                            <button onClick={roomIncrement}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 count-div">
                                                        <label>Adult</label>
                                                        <div className="row counter">
                                                            <button value={adults} onClick={adultDecrement} required >-</button>
                                                            <span>{adult}</span>
                                                            <button onClick={adultIncrement}>+</button>
                                                        </div>

                                                    </div>
                                                    <div className="col-12 count-div">
                                                        <label>Child</label>
                                                        <div className="row counter">
                                                            <button onClick={childDecrement}>-</button>
                                                            <span>{child}</span>
                                                            <button onClick={childIncrement}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                            <Col className='check-book-div'>
                                {/* <Link type='button' onClick={handleSubmit} className='custom-btn'>Check Availability</Link> */}
                                <Link type='button' to={Engine} target='_blank' className='custom-btn'>Check Availability</Link>
                                {/* target='_blank' to={Engine} */}
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </>
    )
}

export default Checks
