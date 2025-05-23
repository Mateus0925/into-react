const Atividade2 = () => {
  return (
    <body>
      <main class="container" role="main">
        <div class="content">
          <div class="input">
            <div>
              <h6>Day</h6>
              <input type="text" placeholder="DD" id="dayIn"></input>
                <p class="error"></p>
            </div>
            <div>
              <h6>Month</h6>
              <input type="text" placeholder="MM" id="monthIn"></input>
                <p class="error"></p>
            </div>
            <div>
              <h6>Year</h6>
              <input type="text" placeholder="YYYY" id="yearIn"></input>
                <p class="error"></p>
            </div>
          </div>
            <button id="calculateBtn"></button>
            <div class="result">
              <h1><span id="yearOut">--</span> years</h1>
              <h1><span id="monthOut">--</span> months</h1>
              <h1><span id="dayOut">--</span> days</h1>
            </div>
        </div>
      </main>
    </body>
  )
}

export default Atividade2
