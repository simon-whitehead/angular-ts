package main

import (
	"io"
	"net/http"
)

func main() {
	http.HandleFunc("/messages", messages)
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.ListenAndServe(":8080", nil)
}

func messages(w http.ResponseWriter, r *http.Request) {
	r.Header.Set("Content-Type", "text/plain")
	io.WriteString(w, "This is a response from the back end")
}
