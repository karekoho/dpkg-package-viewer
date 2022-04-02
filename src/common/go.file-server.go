package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	addr := "localhost:8000"

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
	status, err := os.ReadFile("./doc/status.real.txt")
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	fmt.Fprint(w, string(status))
}

func jsonHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "TODO: json handler")
}
