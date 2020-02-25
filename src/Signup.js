import React, { Component } from 'react'

class Signup extends Component {
    render(){
        return (
            <div>
                <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Create a Username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="Create Password" />
                </div>
                <div>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input type="text" name="confirmpassword" placeholder="Confirm Password" />
                </div>
                <input type="submit" value="Signup" />
                </form>
            </div>
        )
    }
  }

  export default Signup