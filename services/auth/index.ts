const signUp = async (fullName: string, email: string, password: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`, {
    method: 'POST',
    body: JSON.stringify({ fullName, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export default signUp;
