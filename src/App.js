
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import StartScreen from './StartScreen';
import Questions from './Questions';
import Error from './Error';
import FinishScreen from './FinishScreen';
import Spinner from './Spinner';

import { useQuiz } from './contexts/QuizProvider';



function App() {

  const { status } = useQuiz()


  return (
    <section className='quiz'>


      <Main >

      {status === "loading" &&
        <Spinner />
      }

      {status === "error" &&
        <Error />
      }

        {status === "ready" &&
          <StartScreen />
        }

        {
          status === "active" &&
          <>
          {/* <div className='spinner1'>
            <div className='spinn'></div>
            <div className='spinn'></div>
            <div className='spinn'></div>
          </div> */}
            <Header />
            <Questions  />
            <Footer/>
          </>
        }

        {
          status === "finish" &&
          <FinishScreen />
        }
      </Main>


    </section>
  );
}

export default App;