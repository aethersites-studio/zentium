"use client";

import Link from "next/link";
import styles from "./audit-button.module.css";

interface AuditButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
}

export function AuditButton({ label = "Free Visibility Review", href = "/free-audit", onClick }: AuditButtonProps) {
  return (
    <div className={styles.buttonBorders}>
      <Link href={href} className={styles.primaryButton} onClick={onClick}>
        {label}
      </Link>
    </div>
  );
}
