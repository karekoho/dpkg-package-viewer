package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {

	var usage string = fmt.Sprintf("Usage: %s address file", os.Args[0])

	if len(os.Args) < 3 {
		log.Fatal(usage)
	}

	var addr string = os.Args[1]

	http.HandleFunc("/", defaultHandler)     
	http.HandleFunc("/text", textHandler)
	http.HandleFunc("/json", jsonHandler)
 
	log.Printf("File server starts to listen on http://%s", addr)	
	log.Fatal(http.ListenAndServe(addr, nil))
}

func defaultHandler(w http.ResponseWriter, r *http.Request) {
	http.NotFound(w, r)
}

func textHandler(w http.ResponseWriter, r *http.Request) {
	/* 
	if r.Method == http.MethodGet {
		io.WriteString(w, "This is a get request")
	} else {
		io.WriteString(w, "This is a " + r.Method + " request")
	} 
	
	405 Method Not Allowed

	The HyperText Transfer Protocol (HTTP) 405 Method Not Allowed response status code indicates that the server knows the request method, 
	but the target resource doesn't support this method.

	The server must generate an Allow header field in a 405 status code response. 
	The field must contain a list of methods that the target resource currently supports

	Example:
	Allow: GET, POST, HEAD

	Set response headers:
	https://golangbyexample.com/set-resposne-headers-http-go/

	See:
	https://github.com/gorilla/mux

	for HTTP router and URL matcher
	*/

	var statusFile string = os.Args[2]
	status, err := os.ReadFile(statusFile)

	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	
	w.Write(status)
}

func jsonHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "TODO: json handler\n")
}
