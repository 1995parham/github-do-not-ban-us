#lang racket/gui

(define s "GitHub is for everyone")

(define frame (new frame% [label s]))
(define message (new message% [label s]
                              [parent frame]))
(define button (new button% [label "&Ok"]
                            [parent frame]
                            [callback (λ (b ce)
                                        (send frame show #f))]))

(displayln s)

(send frame show #t)
