    body {
        background-color: #fdfdfd;
        color: #1a1a1a;
        overflow-x: hidden;
        padding: 0 20px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
        font-family: inherit;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    /* --- HEADER / NAV --- */
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 0;
        margin-bottom: 40px;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 700;
        font-size: 24px;
    }

    .logo-icon {
        width: 35px;
        height: 35px;
        background: #2563eb;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transform: rotate(5deg);
    }

    nav {
        display: flex;
        gap: 30px;
        font-size: 14px;
        color: #4b5563;
        font-weight: 500;
    }

    .nav-actions {
        display: flex;
        gap: 15px;
    }

    .btn-outline {
        padding: 10px 20px;
        border: 1px solid #e5e7eb;
        background: white;
        border-radius: 8px;
        font-weight: 500;
        color: #1a1a1a;
        transition: 0.2s;
    }

    .btn-outline:hover {
        background: #f3f4f6;
    }

    .btn-primary {
        padding: 10px 24px;
        background: #2563eb;
        color: white;
        border-radius: 8px;
        font-weight: 500;
        transition: 0.2s;
    }

    .btn-primary:hover {
        background: #1d4ed8;
    }

    /* --- HERO SECTION --- */
    .hero {
        display: grid;
        grid-template-columns: 1fr 1.1fr;
        gap: 60px;
        align-items: center;
        margin-bottom: 80px;
    }

    /* LEFT SIDE - TEXT */
    .hero-text .badge {
        display: inline-block;
        background: #eef2ff;
        color: #2563eb;
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    .hero-text h1 {
        font-size: 48px;
        line-height: 1.1;
        font-weight: 800;
        color: #111827;
        margin-bottom: 24px;
    }

    .hero-text h1 span {
        color: #2563eb;
    }

    .hero-text p {
        font-size: 18px;
        color: #4b5563;
        line-height: 1.6;
        margin-bottom: 32px;
        max-width: 480px;
    }

    .hero-actions {
        display: flex;
        gap: 16px;
        margin-bottom: 50px;
    }

    .btn-primary-lg {
        padding: 14px 28px;
        background: #2563eb;
        color: white;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
    }

    .btn-outline-lg {
        padding: 14px 28px;
        border: 1px solid #e5e7eb;
        background: white;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .features-mini {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
    }

    .feature-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        max-width: 160px;
    }

    .feature-item svg {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
    }

    .feature-item h4 {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 4px;
    }

    .feature-item p {
        font-size: 13px;
        color: #6b7280;
        line-height: 1.4;
    }

    /* RIGHT SIDE - DASHBOARD MOCKUP */
    .mockup-container {
        position: relative;
        padding: 20px;
    }

    .dashboard-card {
        background: #15151e;
        border-radius: 16px;
        padding: 20px;
        color: white;
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        position: relative;
        overflow: hidden;
    }

    .dashboard-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        border-bottom: 1px solid #2b2b36;
        padding-bottom: 15px;
    }
    .dash-logo { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 14px; }
    .dash-header-title { font-size: 14px; color: #d1d5db; font-weight: 500; }
    .dash-status { background: #1f2e1f; color: #4ade80; padding: 4px 10px; border-radius: 20px; font-size: 12px; border: 1px solid #2d5235; }

    .dashboard-layout {
        display: grid;
        grid-template-columns: 0.8fr 2fr;
        gap: 20px;
    }

    /* Sidebar */
    .dash-sidebar {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 12px;
        color: #9ca3af;
    }

    .menu-item.active {
        background: #2b2b36;
        color: white;
    }

    .menu-badge {
        width: 16px;
        height: 16px;
        background: #ef4444;
        border-radius: 50%;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    .menu-badge.yellow { background: #f59e0b; }
    .menu-badge.green { background: #22c55e; }
    .menu-badge.blue { background: #3b82f6; }

    /* Main Panel */
    .dash-main {
        background: #1f1f29;
        border-radius: 12px;
        padding: 16px;
    }

    .dash-main-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        font-size: 13px;
        color: #d1d5db;
    }

    .dash-score-section {
        display: flex;
        align-items: center;
        gap: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #2b2b36;
        margin-bottom: 20px;
    }

    /* CSS Circle Chart */
    .chart-wrapper {
        position: relative;
        width: 80px;
        height: 80px;
    }
    .chart-circle {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: conic-gradient(#22c55e 0% 85%, #3f3f4e 85% 100%);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .chart-inner {
        width: 60px;
        height: 60px;
        background: #1f1f29;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .chart-inner span { font-size: 18px; font-weight: 700; }
    .chart-inner small { font-size: 8px; color: #9ca3af; }

    .issues-breakdown {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        row-gap: 6px;
        font-size: 11px;
    }
    .issue-item {
        display: flex;
        justify-content: space-between;
        color: #9ca3af;
    }
    .issue-item span:first-child { display: flex; align-items: center; gap: 6px; }
    .dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
    .dot.critical { background: #ef4444; }
    .dot.high { background: #f59e0b; }
    .dot.medium { background: #eab308; }
    .dot.low { background: #22c55e; }

    .files-section {
        margin-top: 10px;
    }
    .files-section h4 { font-size: 12px; color: #9ca3af; margin-bottom: 8px; }
    .file-icons { display: flex; gap: 15px; font-size: 11px; color: #9ca3af; align-items: center; }
    .file-icon-item { display: flex; align-items: center; gap: 5px; }

    /* Floating Code Card */
    .code-card {
        position: absolute;
        bottom: -70px;
        right: 30px;
        width: 350px;
        background: #1a1a24;
        border-radius: 12px;
        padding: 16px;
        border: 1px solid #2b2b36;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    }
    .code-card-header { font-size: 11px; color: #d1d5db; margin-bottom: 10px; }
    .code-content { font-family: monospace; font-size: 11px; color: #d1d5db; line-height: 1.6; }
    .code-keyword { color: #f472b6; }
    .code-string { color: #fbbf24; }
    .code-function { color: #60a5fa; }
    .code-comment { color: #6b7280; }
    .code-danger { color: #f87171; background: rgba(239, 68, 68, 0.1); padding: 2px 4px; border-radius: 4px; }

    /* --- TRUST SECTION --- */
    .trust-section {
        text-align: center;
        padding: 60px 0 40px 0;
        border-top: 1px solid #f3f4f6;
    }
    .trust-section p {
        font-size: 14px;
        font-weight: 600;
        color: #6b7280;
        letter-spacing: 1px;
        margin-bottom: 30px;
    }
    .tech-logos {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
        align-items: center;
    }
    .tech-logos span {
        font-weight: 600;
        color: #1f2937;
        font-size: 18px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .tech-logos span svg {
        width: 24px;
        height: 24px;
    }
    .tech-color { color: #7f56d9; } /* terraform */
    .tech-docker { color: #2496ed; }
    .tech-k8s { color: #326ce5; }
    .tech-aws { color: #ff9900; }
    .tech-google { color: #4285f4; }
    .tech-azure { color: #0078d4; }

    /* --- RESPONSIVE --- */
    @media (max-width: 1024px) {
        .hero {
            grid-template-columns: 1fr;
            gap: 40px;
        }
        .mockup-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        nav { display: none; }
        .code-card { display: none; } /* Hide extra code card on small screens */
    }
    @media (max-width: 600px) {
        .hero-text h1 { font-size: 32px; }
        .dashboard-layout { grid-template-columns: 1fr; }
        .hero-actions { flex-direction: column; }
        .features-mini { flex-direction: column; }
    }
</style>