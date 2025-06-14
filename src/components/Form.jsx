export default function Form() {
   
    return (
        <div>
            <form action="https://formsubmit.co/ulkin.canada@gmail.com" method="POST">
                <input type="text" name="name" placeholder="Enter your name" required />
                <br />
                <input type="email" name="email" placeholder="Your e-mail address" required />
                <br />
                <button type="submit">SEND</button>
            </form>
        </div>
    );
}