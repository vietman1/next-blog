function DarkTheme(){
    return(
        <style jsx global>
        {`
          /* Dark Theme */
          :root {
            --background-color: black;
            --link-color: rgb(255, 255, 0);
            --text-color: white;
          }
        `}
      </style>
    )
}


export default DarkTheme