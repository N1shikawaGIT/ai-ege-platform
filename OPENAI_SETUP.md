# OpenAI API Setup Guide

## 1. Create OpenAI Account

1. Go to [platform.openai.com](https://platform.openai.com/)
2. Sign up or log in
3. Go to API Keys section

## 2. Create API Key

1. Click "Create new secret key"
2. Name: `ai-ege-platform-production`
3. Copy the key immediately (shown only once)
4. Add to `.env.local`:
   ```
   OPENAI_API_KEY=sk-proj-...
   ```

## 3. Configure Billing

1. Go to Settings → Billing
2. Add payment method
3. Set usage limits:
   - **Soft limit**: $50/month (recommended for MVP)
   - **Hard limit**: $100/month (safety net)

## 4. Model Selection

For this project we use:

- **GPT-4 Turbo**: For AI tutor chat and error explanations
- **text-embedding-3-large**: For RAG vector embeddings

## 5. Rate Limits (Tier 1 - default)

- **GPT-4 Turbo**: 500 RPM, 30,000 TPM
- **Embeddings**: 500 RPM, 1,000,000 TPM

For production (Tier 2+), you need:

- $50+ spent on API
- Account age 7+ days

## 6. Cost Estimates (MVP phase)

**Expected usage per month (100 active users)**:

- Chat sessions: ~500 conversations × 2,000 tokens avg = 1M tokens
  - GPT-4 Turbo: $10/1M input, $30/1M output ≈ **$30-40/month**
- Error explanations: ~2,000 requests × 1,500 tokens avg = 3M tokens ≈ **$30/month**
- Embeddings: ~500 questions × 3,000 tokens = 1.5M tokens ≈ **$0.20/month**

**Total estimated cost**: $60-70/month for MVP with 100 active users

## 7. Monitoring

- Enable usage tracking in OpenAI dashboard
- Set up alerts for approaching limits
- Monitor in our analytics (to be implemented)

---

**Status**: Manual setup required
**Estimated time**: 10 minutes
**Required for**: Phase 1 (AI features)
