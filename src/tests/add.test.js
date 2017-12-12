const add = (a, b) => a + b;
const generatedGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7);
});

test('should return a greeting', () => {
	const reply = generatedGreeting('Mike');
	expect (reply).toBe('Hello Mike!'); 
});

test('should generate greeting for no name', () => {
    const reply = generatedGreeting();
    expect(result).toBe('Hello Anonymous!');
}); 