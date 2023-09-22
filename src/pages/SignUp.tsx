export const SignUp = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <label htmlFor="">
          이메일
          <input type="text" name="email" id="email" required />
        </label>
        <label htmlFor="">
          이메일 확인
          <input type="text" name="confirm-email" id="confirm" required />
        </label>
        <label htmlFor="">
          비밀번호
          <input type="password" name="password" id="password" required />
        </label>
        <label htmlFor="">
          비밀번호 확인
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            required
          />
        </label>
        <input type="submit" value="회원가입" disabled={false} />
      </form>
    </div>
  );
};
