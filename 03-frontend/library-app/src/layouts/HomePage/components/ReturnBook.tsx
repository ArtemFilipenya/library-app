import {BookModel} from "../../../models/BookModel";
import React from "react";

export const ReturnBook: React.FC<{book: BookModel}> = (props) => {
    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                {props.book.img ?
                    <img
                        src={props.book.img}
                        width='151'
                        height='233'
                        alt='ALT photo'
                    />
                    :
                    <img
                        src={require('../../../Images/BooksImages/book-luv2code-1000.png')}
                        width='151'
                        height='233'
                        alt='ALT photo'
                    />
                }
                <h6 className='mt-2'>{props.book.title}</h6>
                <p>{props.book.author}</p>
                <a className='btn main-color text-white' href='/Users/fas/Desktop/MacBook/training/udemy-react-springboot-library/library-app/03-frontend/library-app/public#'>Reserve</a>
            </div>
        </div>
    );
}