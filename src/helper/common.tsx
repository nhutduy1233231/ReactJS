interface TreeNode {
  id: string
  items?: TreeNode[]
}

export const findParentKeys = (data: TreeNode[], targetKey: string, parentKeys: string[] = []): string[] => {
  for (const val of data) {
    if (val.id == targetKey) {
      return [...parentKeys]
    }

    if (val.items) {
      const result: string[] = findParentKeys(val.items, targetKey, [...parentKeys, val.id])
      if (result) {
        return result
      }
    }
  }

  return []
}
