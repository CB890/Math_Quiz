document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    const resultsDiv = document.getElementById('results');
    
    // Correct answers
    const answers = {
        q1: 22,  // 7 + 15
        q2: 72,  // 8 × 9
        q3: 8,   // 64 ÷ 8
        q4: 12   // 25 - 13
    };
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        let score = 0;
        let feedback = '';
        
        // Check answers
        for (let i = 1; i <= 4; i++) {
            const userAnswer = parseInt(formData.get(`q${i}`));
            const correctAnswer = answers[`q${i}`];
            
            if (userAnswer === correctAnswer) {
                score++;
                feedback += `<p>Question ${i}: Correct! ✓</p>`;
            } else {
                feedback += `<p>Question ${i}: Incorrect. The correct answer is ${correctAnswer}.</p>`;
            }
        }
        
        // Display results
        resultsDiv.innerHTML = `
            <h2>Quiz Results</h2>
            <p>You scored ${score} out of 4.</p>
            ${feedback}
        `;
        resultsDiv.classList.remove('hidden');
        
        // Get user info
        const name = formData.get('name');
        const email = formData.get('email');
        
        // Send data to Google Sheets (this will be implemented in step 4)
        sendToGoogleSheets(name, email, score, {
            q1: formData.get('q1'),
            q2: formData.get('q2'),
            q3: formData.get('q3'),
            q4: formData.get('q4')
        });
    });
    
    // Function to send data to Google Sheets (placeholder for now)
    function sendToGoogleSheets(name, email, score, answers) {
        console.log('Data to be sent to Google Sheets:', {
            name,
            email,
            score,
            answers
        });
        
        // We'll implement the actual sending logic in step 4
    }
});
