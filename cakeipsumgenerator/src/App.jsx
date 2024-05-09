import loremdata from "./data";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, Setcount] = useState(0);
  const [click, Setclick] = useState(false);

  function getCount(e) {
    Setcount(e.target.value);
    Setclick(false);
  }

  function getLoremData() {
    Setclick(true);
    if (count > 9) {
      alert(
        " ! you are demanding very much paragraph in one go, kindly take little litlle 😀"
      );
    }
  }

  return (
    <>
      <div className="maindiv">
        <h1 style={{ textAlign: "center", paddingTop: "50px" }}>
          TIRED OF BORING LOREM IPSUM?
        </h1>

        <div className="innerdiv">
          <span>Paragraphs:</span>
          <input type="number" value={count} onChange={getCount}></input>{" "}
          <button onClick={getLoremData}>GENERATE</button>
        </div>

        <div className="paragraphs">
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aut accusamus sequi, hic libero cumque earum iusto laboriosam nisi voluptates cum fugiat sint explicabo voluptate sed quasi corrupti, assumenda itaque, harum dolorum praesentium! Vitae molestiae provident esse, dolorem quidem mollitia quod, rem iste facilis ipsa expedita reiciendis modi, repellat quam! Minima nihil aliquid veritatis perspiciatis, eos, placeat, nostrum rerum repellendus itaque eum deleniti ab illum odit voluptate provident. Cumque fugit autem alias doloribus pariatur, aliquam velit fuga iure ullam tenetur omnis assumenda, nihil magni consequatur minima ipsum repudiandae! Amet similique natus commodi illum soluta iusto exercitationem consequuntur dignissimos mollitia reiciendis.</p> */}

          {click
            ? loremdata
                .filter((ele, i) => {
                  return i < count;
                })
                .map((d) => {
                  return( <p>{d.text}</p>);

                })
            : null}
        </div>
      </div>
    </>
  );
}

export default App;
