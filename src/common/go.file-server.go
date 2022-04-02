package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

const statusFile string = "./doc/status.real.txt";

func main() {
	var addr string = "localhost:8000"

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
	} else if r.Method == http.MethodPost {
		io.WriteString(w, "This is a post request")
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
	*/

	status, err := os.ReadFile(statusFile)

	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	
	w.Write(status)
}

func jsonHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "TODO: json handler")
}
