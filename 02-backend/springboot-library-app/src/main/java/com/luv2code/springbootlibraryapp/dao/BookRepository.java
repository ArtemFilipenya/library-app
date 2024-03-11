package com.luv2code.springbootlibraryapp.dao;

import com.luv2code.springbootlibraryapp.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

}
