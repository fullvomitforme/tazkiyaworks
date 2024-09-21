// Buat API route di /api/footerdate
export default async function handler(req: any, res: any) {
  const data = await fetch(
    'https://api.github.com/repos/fullvomitforme/tazkiyaworks/commits',
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  ).then((res) => res.json());

  const lastCommit = !data.message
    ? data.map((commit: any) => commit.commit.committer.date)[0]
    : '2023/11/07';

  const lastCommitDate = new Date(lastCommit).toLocaleDateString();

  res.status(200).json({ lastCommitDate });
}
