import { styled } from "@mui/material";
export type Member = { id: string | number; avatarUrl?: string };

export default function AvatarStack({ members, size = 28 }: { members: Member[]; size?: number }) {
  return (
    <Root style={{ ["--s" as any]: `${size}px` }}>
      {members.map((m, _i) =>
        m.avatarUrl ? (
          <Img key={m.id} src={m.avatarUrl} alt="" loading="lazy" />
        ) : (
          <Stub key={m.id} />
        )
      )}
    </Root>
  );
}

const Root = styled("div")({
  display: "flex",
  alignItems: "center",
  "& > *:not(:first-of-type)": { marginLeft: -8 },
});

const ring = "2px solid rgba(6,11,38,.9)";

const Img = styled("img")({
  width: "var(--s)",
  height: "var(--s)",
  borderRadius: "50%",
  objectFit: "cover",
  border: ring,
  boxShadow: "0 4px 10px rgba(0,0,0,.35)",
  display: "block",
});

const Stub = styled("div")({
  width: "var(--s)",
  height: "var(--s)",
  borderRadius: "50%",
  border: ring,
  background: "rgba(255,255,255,.2)",
  boxShadow: "0 4px 10px rgba(0,0,0,.35)",
});
