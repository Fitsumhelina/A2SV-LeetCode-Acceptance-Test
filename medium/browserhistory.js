/*Question 
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.*/

//Solution

class BrowserHistory {
    constructor(homepage) {
        this.current = homepage;
        this.backHistory = [];    
        this.forwardHistory = []; 
    }

    visit(url) {
        this.backHistory.push(this.current);  
        this.current = url;                
        this.forwardHistory = [];          
         }

    back(steps) {
        while (steps > 0 && this.backHistory.length > 0) {
            this.forwardHistory.push(this.current); 
            this.current = this.backHistory.pop();  
            steps--;
        }
        return this.current;
        }

    forward(steps) {
        while (steps > 0 && this.forwardHistory.length > 0) {
            this.backHistory.push(this.current);    
            this.current = this.forwardHistory.pop();
            steps--;
        }
        return this.current; 
    }
}
