-- ============================================================
-- Supabase Setup for King Plastic Surgery CMS
-- Run this in the Supabase SQL Editor
-- ============================================================

-- 1. Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name       text NOT NULL,
  email      text NOT NULL,
  phone      text,
  subject    text,
  message    text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 2. Enable Row Level Security
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- 3. Allow anyone to INSERT (website contact form)
CREATE POLICY "Allow public insert"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4. Allow authenticated users (admin) to SELECT and DELETE
CREATE POLICY "Allow admin select"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow admin delete"
  ON contact_inquiries
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================================
-- STORAGE BUCKETS
-- Create these in the Supabase Dashboard → Storage:
--
-- 1. Bucket name: cms        (Public: YES)
-- 2. Bucket name: cms-images (Public: YES)
--
-- Then run the policies below:
-- ============================================================

-- Allow public (anon) to READ from cms bucket (website fetches JSON)
CREATE POLICY "Public read cms"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'cms');

-- Allow authenticated admin to INSERT (upload new files) to cms bucket
CREATE POLICY "Admin insert cms"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'cms');

-- Allow authenticated admin to UPDATE (overwrite files) in cms bucket
CREATE POLICY "Admin update cms"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'cms');

-- Allow authenticated admin to DELETE from cms bucket
CREATE POLICY "Admin delete cms"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'cms');

-- Allow public to READ from cms-images bucket
CREATE POLICY "Public read cms-images"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'cms-images');

-- Allow authenticated admin to INSERT into cms-images bucket
CREATE POLICY "Admin insert cms-images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'cms-images');

-- Allow authenticated admin to UPDATE in cms-images bucket
CREATE POLICY "Admin update cms-images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'cms-images');

-- Allow authenticated admin to DELETE from cms-images bucket
CREATE POLICY "Admin delete cms-images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'cms-images');
