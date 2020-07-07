import React, { FunctionComponent } from "react";
import ThemeContext from "../context/theme-context";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Stylized } from "../interfaces/index";
import Loading from "../components/sections/Loading";
import { LoadingContext, DataContext } from "../context/data-context";
import { AnimatePresence, motion } from "framer-motion";

// TODO Add loading splash screen

type Layout = {
  children: JSX.Element | JSX.Element[];
};

const client = new ApolloClient({
  uri: "https://intense-ravine-82013.herokuapp.com/api/graphql",
});

const GlobalStyle = createGlobalStyle`
* {
  font-size: 7px;
}

@media (min-width: 600px) {
  * {
    font-size: 8px;
  }
}

@media (min-width: 670px) {
  * {
    font-size: 9px;
  }
}

@media (min-width: 900px) {
  * {
    font-size: 10px;
  }
}

@media (min-width: 1200px) {
  * {
    font-size: 11px;
  }
}

body {
  background-color: ${(props: Stylized) => props.theme.background};
  color: ${(props: Stylized) => props.theme.text.primary};
  font-family: "Raleway", "Open Sans", sans-serif;
}

a {
  color: ${(props: Stylized) => props.theme.text.secondary};
  text-decoration: none;

  :hover {
    color: ${(props: Stylized) => props.theme.text.primary};

  }
}

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: bold;
    font-size: 8.5em;
    letter-spacing: 0.02em;
    margin: 0;
    color: ${(props: Stylized) => props.theme.text.secondary};
    white-space: nowrap;
  }

  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 3.1em;
    margin: 0;
    color: ${(props: Stylized) => props.theme.shades.primary};
    display: flex;
    align-items: center;
    text-align: center;
    white-space: nowrap;
  }

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: bold;
    font-size: 2.8em;
    margin: 0;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: ${(props: Stylized) => props.theme.text.primary};
    white-space: nowrap;

  }

  h4 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 3.5em;
    margin: 0;
    color: ${(props: Stylized) => props.theme.text.secondary};
    white-space: nowrap;

  }

  h5 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 5em;
    margin: 0;
    color: ${(props: Stylized) => props.theme.text.secondary};
    white-space: nowrap;
  }

  h6 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 3.2em;
    margin: 0;
    color: ${(props: Stylized) => props.theme.accent.secondary};
    white-space: nowrap;
  }

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 2.4em;
    margin: 0;
    color: ${(props: Stylized) => props.theme.text.secondary};
  }
`;
const Layout: FunctionComponent<Layout> = ({ children }) => {
  const [loading, toggleLoading] = React.useState(true);
  const [data, setData] = React.useState({
    about: null,
    fun: null,
    main: null,
    work: null,
    projects: null,
  });

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Consumer>
        {(theme) => (
          <>
            <GlobalStyle theme={theme} />
            <DataContext.Provider value={{ data: data, setData: setData }}>
              <LoadingContext.Provider
                value={{ loading: loading, toggleLoading: toggleLoading }}
              >
                <AnimatePresence exitBeforeEnter>
                  {loading ? (
                    <motion.div exit={{opacity: 0}} transition={{duration: 0.2}} key="outer-loading-scren">
                      <Loading
                        toggleLoading={toggleLoading}
                        setData={setData}
                      />
                    </motion.div>
                  ) : (
                    <div>
                      <Header />
                      <div
                        style={{
                          margin: `0 auto`,
                          maxWidth: 1200,
                          padding: `0 1.0875rem 1.45rem`,
                        }}
                      >
                        <main>{children}</main>
                        <footer>
                          © {new Date().getFullYear()}, Made with ❤️ by Fabian
                          Gonzalez .
                        </footer>
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </LoadingContext.Provider>
            </DataContext.Provider>
            )
          </>
        )}
      </ThemeContext.Consumer>
    </ApolloProvider>
  );
};

export default Layout;
