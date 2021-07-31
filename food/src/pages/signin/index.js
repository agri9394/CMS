import { SignInContainer, SignInBox ,InputDiv} from './styledComponents'
import { useHistory } from 'react-router-dom';

function SignInPage() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  }

    return (
        <SignInContainer>
            <SignInBox>
            <h2>Sign In</h2>
          <InputDiv className="form-group">
          <label for="usr">Email:</label>
          <input type="text" className="form-control" id="usr"/>
          </InputDiv>
          <InputDiv className="form-group">
          <label for="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd"/>
          </InputDiv>

          <div className="form-group">
          <button onClick={handleClick} type="button" class="btn btn-primary">Sign In</button>
          </div>
            </SignInBox>
        </SignInContainer>
    );
}

export default SignInPage;
