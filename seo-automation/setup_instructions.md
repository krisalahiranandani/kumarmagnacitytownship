# Google Indexing API Setup Guide

Follow these steps to enable rapid indexing for **Kumar Magnacity**. Once configured, you can "push" all 80+ plot pages to Google Search in minutes.

---

## Step 1: Create a Google Cloud Project
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project called `Kumar-Magnacity-SEO`.
3. Go to **APIs & Services > Library**.
4. Search for **"Indexing API"** and click **Enable**.

## Step 2: Create a Service Account & Key
1. Go to **APIs & Services > Credentials**.
2. Click **Create Credentials > Service Account**.
3. Name it `indexing-agent`, click **Create and Continue**.
4. Skip the optional roles and click **Done**.
5. In the Service Accounts list, click the **Email** of the account you just created.
6. Go to the **Keys** tab.
7. Click **Add Key > Create New Key**.
8. Select **JSON** and click **Create**.
9. **IMPORTANT**: Save the downloaded file into this folder (`/seo-automation/`) and rename it to `service_account.json`.

## Step 3: Authorize in Google Search Console
1. Open [Google Search Console](https://search.google.com/search-console).
2. Select your property: `kumarmagnacitytownship.com`.
3. Go to **Settings > Users and Permissions**.
4. Click **Add User**.
5. **Email Address**: Paste the email of your Service Account (found in Step 2).
6. **Permission**: You MUST select **Owner**. (Full/Restricted will NOT work for the Indexing API).

## Step 4: Run the Indexer
Once the above steps are complete, run the following commands in your terminal:

```bash
# 1. Navigate to the folder
cd seo-automation

# 2. Install dependencies
pip install -r requirements.txt

# 3. Perform a Dry Run (Verification)
python3 trigger_indexing.py --dry-run

# 4. Trigger Live Indexing
python3 trigger_indexing.py
```

---

> [!CAUTION]
> **API Limits**: The Indexing API has a default limit of 200 URLs per day. Your sitemap currently has ~80 URLs, so you can run this once per day without issues.

> [!TIP]
> **Verification**: After running the script, check your Search Console "Pages" report after 24 hours. You should see a surge in "Discovered" or "Indexed" pages.
