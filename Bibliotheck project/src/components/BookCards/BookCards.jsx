/* eslint-disable jsx-a11y/alt-text */

import firebase, { firestore } from '../../firebase';
import './BookCards.css';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Developments from '../Dev/dev';

function BookCards(props) {
    const ref = firebase.firestore().collection('booki')
    const [data, setdata] = useState([])
    const [filtered, setFiltered] = useState([])
    const [loader, setloader] = useState(true);
    // eslint-disable-next-line no-unused-vars

    const add = async (id, adder) => {
        await firestore.collection("users").doc(id).update(adder)
        const doc = await firestore.collection("users").doc(id).get()
        const user = {
            id: doc.id,
            ...doc.data()
        }
        console.log(user);
        return user
    }
    function getData() {
        ref.onSnapshot((QuerySnapshot) => {
            const items = []
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setFiltered(items)
            setdata(items)
            setloader(false)
        })
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!props.search) {
            setFiltered(data)
        } else {
            setFiltered(data.filter((elem) => {
                return (elem.name.toLowerCase().includes(props.search.toLowerCase()) || elem.author.toLowerCase().includes(props.search.toLowerCase())) 
            }))
        }
    }, [props.search])


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 }
    ];

    console.log(props.search);

    return (
        <>
            <Container className="cards">
                <Row>
                    {loader === false && (filtered.map((book) => (
                        <Col xs={4} md={4}>
                            <>
                                {book.id}
                                <img src={book.img} />
                                <h3>{book.author}</h3>
                                <h4>{book.name}</h4>
                                <p>{book.aboutbook}</p>
                                {/* <button onClick={() => addFav(localStorage.setItem(user.id),{text:'Hello world'})}>Подробнее</button> */}
                            </>
                        </Col>
                    )))}
                </Row>
            </Container>
            <hr style={{ color: "#4169E1" }} />
            <div className='bookSlider' >
                <h3 className='populyar'>Популярное</h3>
                <Carousel breakPoints={breakPoints}>
                    {data.map((book) => (
                        <Item><img src={book.img}></img></Item>
                    ))}
                </Carousel>
                <hr style={{ color: "#4169E1" }} />
            </div>
            <h3 className='devHeader'>Разработчики</h3>
            <div className='developments'>
                <div className='dev dev1'><h5>Oomat</h5></div>
                <div className='dev dev2'><h5>Bayel</h5></div>
                <div className='dev dev3'><h5>Khurshed</h5></div>
            </div>

        </>
    );
}
export default BookCards;
