import { useCallback, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

export const useRouter = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  // Chuyển searchParams thành object để dễ truy xuất dữ liệu
  const query = useMemo(() => {
    return Object.fromEntries(searchParams.entries())
  }, [searchParams])

  // Hàm điều hướng, đảm bảo đường dẫn tuyệt đối
  const push = useCallback(
    (path: string, options: { replace?: boolean } = {}) => {
      // Nếu đường dẫn không bắt đầu bằng "/", thêm vào
      const absolutePath = path.startsWith('/') ? path : `/${path}`
      navigate(absolutePath, { replace: options.replace ?? false })
    },
    [navigate]
  )

  return { query, push }
}
