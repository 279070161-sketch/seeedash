document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    const registerForm = document.getElementById('registerForm');

    function checkAgreement() {
        const agreementCheckbox = document.getElementById('agreementCheckbox');
        if (agreementCheckbox && !agreementCheckbox.checked) {
            // Shake the agreement footer to draw attention
            const footer = document.querySelector('footer');
            if (footer) {
                footer.classList.add('shake-element');
                setTimeout(() => {
                    footer.classList.remove('shake-element');
                }, 400);
            }

            // Show a gorgeous floating toast alert
            showToast('Please read and agree to the User Agreement and Privacy Policy');
            return false;
        }
        return true;
    }

    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            if (!checkAgreement()) return;

            signInBtn.innerHTML = '正在跳转...';
            signInBtn.style.opacity = '0.7';
            signInBtn.disabled = true;
            if (signUpBtn) signUpBtn.disabled = true;
            
            setTimeout(() => {
                window.location.href = 'login_password.html';
            }, 800);
        });
    }

    if (signUpBtn) {
        signUpBtn.addEventListener('click', () => {
            if (!checkAgreement()) return;

            signUpBtn.innerHTML = '正在跳转...';
            signUpBtn.style.opacity = '0.7';
            signUpBtn.disabled = true;
            if (signInBtn) signInBtn.disabled = true;
            
            setTimeout(() => {
                window.location.href = 'register.html';
            }, 800);
        });
    }

    const googleLoginBtn = document.getElementById('googleLoginBtn');
    const appleLoginBtn = document.getElementById('appleLoginBtn');
    const githubLoginBtn = document.getElementById('githubLoginBtn');

    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', () => {
            if (!checkAgreement()) return;

            googleLoginBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                正在跳转...
            `;
            googleLoginBtn.style.opacity = '0.7';
            googleLoginBtn.disabled = true;
            if (appleLoginBtn) appleLoginBtn.disabled = true;
            if (githubLoginBtn) githubLoginBtn.disabled = true;
            if (signInBtn) signInBtn.disabled = true;
            if (signUpBtn) signUpBtn.disabled = true;

            setTimeout(() => {
                window.location.href = 'overview.html';
            }, 800);
        });
    }

    if (appleLoginBtn) {
        appleLoginBtn.addEventListener('click', () => {
            if (!checkAgreement()) return;

            appleLoginBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-1.07 1.66 0 3.16.59 4.15 1.76-3.01 1.76-2.53 5.92.51 7.18-.89 2.19-2.15 4.38-3.07 5.88zM15.89 4.65c.67-.81 1.12-1.95.99-3.09-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.87-1.01 2.99 1.11.08 2.27-.58 2.94-1.39z"/>
                </svg>
                正在跳转...
            `;
            
            appleLoginBtn.style.opacity = '0.7';
            appleLoginBtn.disabled = true;
            if (googleLoginBtn) googleLoginBtn.disabled = true;
            if (githubLoginBtn) githubLoginBtn.disabled = true;
            if (signInBtn) signInBtn.disabled = true;
            if (signUpBtn) signUpBtn.disabled = true;

            setTimeout(() => {
                window.location.href = 'overview.html';
            }, 800);
        });
    }

    if (githubLoginBtn) {
        githubLoginBtn.addEventListener('click', () => {
            if (!checkAgreement()) return;

            githubLoginBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                正在跳转...
            `;
            
            githubLoginBtn.style.opacity = '0.7';
            githubLoginBtn.disabled = true;
            if (googleLoginBtn) googleLoginBtn.disabled = true;
            if (appleLoginBtn) appleLoginBtn.disabled = true;
            if (signInBtn) signInBtn.disabled = true;
            if (signUpBtn) signUpBtn.disabled = true;

            setTimeout(() => {
                window.location.href = 'overview.html';
            }, 800);
        });
    }

    // Modern floating toast alert helper
    function showToast(message) {
        const existingToast = document.querySelector('.custom-toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = 'custom-toast';
        toast.style.cssText = `
            position: fixed;
            top: 24px;
            left: 50%;
            transform: translateX(-50%) translateY(-20px);
            background: #ef4444;
            color: #ffffff;
            padding: 12px 20px;
            border-radius: 12px;
            font-size: 0.82rem;
            font-weight: 600;
            box-shadow: 0 10px 25px rgba(239, 68, 68, 0.22);
            z-index: 9999;
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: none;
            text-align: center;
            max-width: 90%;
            width: max-content;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.transform = 'translateX(-50%) translateY(0)';
            toast.style.opacity = '1';
        });

        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(-20px)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Registering...');
            const btn = registerForm.querySelector('.btn-primary');
            btn.innerHTML = '正在创建...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                alert('注册成功！正在跳转登录...');
                window.location.href = 'login.html';
            }, 1500);
        });
    }

    // Input hover/focus effects enhancement
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.parentElement.style.transform = 'scale(1.02)';
            input.parentElement.parentElement.style.transition = 'transform 0.3s ease';
        });
        input.addEventListener('blur', () => {
            input.parentElement.parentElement.style.transform = 'scale(1)';
        });
    });
});
